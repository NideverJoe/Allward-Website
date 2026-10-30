-- Contact form submissions
-- Run this in the Supabase SQL Editor for your project.

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  TIMESTAMPTZ NOT NULL    DEFAULT now(),
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  organization TEXT,
  message     TEXT
);

-- Index for querying by time
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

-- Disable public read/write; only the service role key can insert.
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
