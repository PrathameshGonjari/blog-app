"use client";
import React, { useState, useEffect } from "react";

const withClientOnly = <P extends object>(Component: React.ComponentType<P>) => {
  const ClientOnlyComponent = (props: P) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return mounted ? <Component {...props} /> : null;
  };

  ClientOnlyComponent.displayName = `withClientOnly(${Component.displayName ?? Component.name ?? "Component"})`;

  return ClientOnlyComponent;
};

export default withClientOnly;
