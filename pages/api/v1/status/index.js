import database from "infra/database.js";
import { Query } from "pg";

async function status(request, response){
  const updateAt = new Date();

  const versionPostgres = await database.query("SHOW server_version;");
  const versionPostgresValue = versionPostgres.rows[0].server_version

  const maxQuerys = await database.query('SHOW max_connections;');
  const maxQuerysValue = await parseInt(maxQuerys.rows[0].max_connections);

  const dataBaseConnectionsResolve = await database.query("SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';")
  const dataBaseOpenedConnectionsValue = await dataBaseConnectionsResolve.rows[0].count


  response.status(200).json({
    update_at: updateAt,
    version : versionPostgresValue,
    max_querys : maxQuerysValue,
    opened_connections : dataBaseOpenedConnectionsValue
  });


}

export default status
