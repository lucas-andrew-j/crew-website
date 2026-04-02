-- Verify crew_database:schema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('crew_db', 'usage');

ROLLBACK;
