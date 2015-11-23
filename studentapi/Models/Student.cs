﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentAPI.Models
{
    public class Student
    {
        [Key]
        [Required]
        public String StudentId { get; set; }

        public String FirstName { get; set; }

        public String LastName { get; set; }

        public String Program { get; set; }

        //public List<Student> student { get; set; }

    }
}