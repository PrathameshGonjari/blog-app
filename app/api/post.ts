import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

const SECRET = process.env.SANITY_WEBHOOK_SECRET as string;

interface WebhookPayload {
  _type: string;
  _id: string;
  _rev: string;
  slug?: string;
  [key: string]: unknown;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString();
  if (!signature) {
    return res.status(400).json({ message: "Missing signature header" });
  }

  const body = JSON.stringify(req.body);

  try {
    const valid = await isValidSignature(body, signature, SECRET);
    if (!valid) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid signature" });
    }

    console.log("Webhook received:", req.body);

    const { slug } = req.body as WebhookPayload;

    if (!slug || typeof slug !== "string") {
      return res
        .status(400)
        .json({ message: "Invalid payload: Missing or invalid slug" });
    }

    await res.revalidate(`/${slug}`);
    await res.revalidate("/");

    return res.status(200).json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
