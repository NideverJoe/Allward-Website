import { createClient } from "@supabase/supabase-js";

export interface ContactSubmission {
  name: string;
  email: string;
  organization?: string | null;
  message?: string | null;
}

export async function saveContactSubmission(data: ContactSubmission): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const supabase = createClient(url, key);

  const { error } = await supabase.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    organization: data.organization ?? null,
    message: data.message ?? null,
  });

  if (error) {
    throw new Error(`Database insert failed: ${error.message}`);
  }
}
