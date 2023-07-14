import React from "react";
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "500px", border: "1px solid white" }}>{children}</div>
  );
}
