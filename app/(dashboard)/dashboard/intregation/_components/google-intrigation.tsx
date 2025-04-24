'use client';

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { getGoogleAuthURL } from "./_utils/auth-urls";
import { Tverified } from "@/action/get-user-privatedata";

export default function GoogleIntegration({ verified }: { verified: Tverified }) {
  // Use local state to manage the connected status (based on verified.hasEmail)
  const [isConnected, _setIsConnected] = React.useState(verified.hasEmail);

  // When toggled, if not connected, start the auth flow.
  const handleToggle = async () => {
    if (!isConnected) {
      window.location.href = await getGoogleAuthURL();
    }
    // You might add disconnect logic here if needed.
  };

  return (
    <div style={{marginLeft:"16rem" ,backgroundColor:"black"}} className=" space-y-4 p-4">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Google Integration</h1>
      </div>
      {/* Long-line card component acting as a toggle */}
      <div className="border border-green-500 border-2 rounded-lg p-4 flex items-center justify-between">
        <div>
          <Label className="text-lg text-white font-medium">Gmail</Label>
          <p className="text-sm text-white">
            {isConnected
              ? "Your Gmail account is connected."
              : "Connect your Gmail to send emails."}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {isConnected ? (
            <Badge  className="bg-green-500 text-white">Connected</Badge>
          ) : (
            <Badge variant="destructive">Not Connected</Badge>
          )}
          <Switch
          style={{backgroundColor:"#00e676"}}
            checked={isConnected}
            onCheckedChange={handleToggle}
            className="ml-4 "
          />
        </div>
      </div>
    </div>
  );
}
