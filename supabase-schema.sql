-- Jalankan file ini di Supabase SQL Editor jika nanti data GuruGen ingin disimpan online.
-- Versi saat ini memakai satu baris JSON agar migrasi dari data/gurugen-db.json mudah.

create table if not exists public.gurugen_app_state (
  id text primary key default 'main',
  data jsonb not null default '{
    "users": [],
    "usage": {},
    "history": {},
    "notices": [],
    "tokenState": { "limit": 100000, "used": 0 }
  }'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.gurugen_app_state (id)
values ('main')
on conflict (id) do nothing;

create or replace function public.touch_gurugen_app_state()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_touch_gurugen_app_state on public.gurugen_app_state;

create trigger trg_touch_gurugen_app_state
before update on public.gurugen_app_state
for each row execute function public.touch_gurugen_app_state();
