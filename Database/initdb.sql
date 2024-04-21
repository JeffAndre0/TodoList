DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'postgres') THEN
        CREATE DATABASE postgres;
    END IF; 
END $$;

DO $$ 
BEGIN 
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'tasks' AND table_schema = 'public') THEN
        DROP TABLE public.tasks;
    END IF; 
END $$;

CREATE TABLE public.tasks (
    id SERIAL PRIMARY KEY,
    task VARCHAR(80) NOT NULL,
    responsible VARCHAR(60),
    priority INTEGER,
    status INTEGER,
    deadline TIMESTAMP
);
