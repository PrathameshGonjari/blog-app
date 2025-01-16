// pages/api/webhook.js

import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

const SECRET = process.env.SANITY_WEBHOOK_SECRET; // Add this in your .env file

interface WebhookPayload {
  _type: string;
  _id: string;
  _rev: string;
  [key: string]: string | number | boolean | object;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const signature = req.headers["sanity-webhook-signature"] as string;
  const body = JSON.stringify(req.body);

  const hash = crypto
    .createHmac("sha256", SECRET as string)
    .update(body)
    .digest("hex");

  if (hash !== signature) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    console.log("Webhook received:", req.body);

    const { slug } = req.body as WebhookPayload;

    if (typeof slug !== "string") {
      throw new Error("Invalid slug");
    }

    await res.revalidate(`/${slug}`);
    await res.revalidate("/");

    return res.status(200).json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
