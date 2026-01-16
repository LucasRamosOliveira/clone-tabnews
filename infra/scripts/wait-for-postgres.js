const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleRetorn);

  function handleRetorn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }
    console.log("\nO Postgres está pronto e aceitando conexões\n");
  }
}

console.log("\n\nAguardando o Postres aceitar conexões");
