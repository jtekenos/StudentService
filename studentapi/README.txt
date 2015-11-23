

Enable-Migrations -ContextTypeName StudentContext -MigrationsDirectory Migrations\StudentMigrations

add-migration -ConfigurationTypeName StudentAPI.Migrations.StudentMigrations.Configuration "InitialCreate"

update-database -ConfigurationTypeName StudentAPI.Migrations.StudentMigrations.Configuration




Update-Database -TargetMigration:0