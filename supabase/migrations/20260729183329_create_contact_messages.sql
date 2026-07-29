/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — message body
  - `read` (boolean, default false) — flag for inbox triage
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth portfolio contact form. Anyone (anon) may submit a message.
- Allow anon + authenticated INSERT (the public contact form).
- No public SELECT/UPDATE/DELETE: only the service role (dashboard) can read/manage messages.
  This prevents anonymous visitors from reading other people's submissions.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Public may submit contact messages (INSERT only).
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
