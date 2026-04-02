-- Revert crew_database:schema from pg

BEGIN;

DROP SCHEMA crew_db;

COMMIT;
