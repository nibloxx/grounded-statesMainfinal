import React from "react";
import { FormSection, ModalHeader } from "@/components/shared";

type UserType = "investor" | "client" | "broker";

// Required for static export with dynamic segments
export async function generateStaticParams() {
  return [
    { userType: "investor" },
    { userType: "client" },
    { userType: "broker" },
  ];
}

export default async function RegisterUserTypePage({
  params,
}: {
  params: Promise<{ userType: UserType }>;
}) {
  const { userType } = await params;

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <ModalHeader />
      <div className="max-w-7xl mx-auto w-full px-6 py-12">
        <FormSection userType={userType} redirectTo="/" />
      </div>
    </div>
  );
}
