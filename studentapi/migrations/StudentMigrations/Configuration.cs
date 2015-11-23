namespace StudentAPI.Migrations.StudentMigrations
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<StudentContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"Migrations\StudentMigrations";
        }

        protected override void Seed(StudentContext context)
        {
            List<Student> students = new List<Student>();

            students.Add(new Student()
            {
                StudentId = "A00222222",
                FirstName = "Jane",
                LastName = "Baker",
                Program = "CST"
            });

            students.Add(new Student()
            {
                StudentId = "A00111111",
                FirstName = "John",
                LastName = "Archer",
                Program = "CIT"
            });

            students.Add(new Student()
            {
                StudentId = "A00333333",
                FirstName = "Bill",
                LastName = "Carter",
                Program = "BTECH"
            });

            students.Add(new Student()
            {
                StudentId = "A00444444",
                FirstName = "Judy",
                LastName = "Fisher",
                Program = "Nursing"
            });
            context.Students.AddRange(students);

            context.SaveChanges();
        }
    }
}
