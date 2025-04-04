
'use client'
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "lucide-react";

function GoogleCallback() {
  const searchParams = useSearchParams();
  const code = searchParams?.get("code");
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const sendRequest = async () => {
      if (code) {
        try {
          setLoading(true);
          await axios.get(`/api/callback/google?code=${code}`);
          router.push('/dashboard/integration');
        } catch (error :any) {
          setLoading(false);
          setError(error.response?.data.error);
        }
      }
    };

    sendRequest();
  }, [code, router]);

  return (
    <div>
      {loading && (
        <div className="h-full w-full flex justify-center items-center">
          <span>Please wait...</span> <Loader className="animate-spin" />
        </div>
      )}
      {error && (
        <div className="text-center text-xl font-semibold">{error}</div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GoogleCallback />
    </Suspense>
  );
}
