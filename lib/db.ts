export interface ContactSubmission {
  name: string;
  email: string;
  organization?: string;
  message?: string;
}

export async function saveContactSubmission(data: ContactSubmission): Promise<void> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) throw new Error("WEB3FORMS_ACCESS_KEY is not configured.");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, ...data }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { message?: string };
    throw new Error(body.message ?? "Web3Forms submission failed.");
  }
}
