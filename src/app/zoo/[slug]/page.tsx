import React from "react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function ZooPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}
