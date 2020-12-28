using System;

namespace UserRegistration.Models
{
    public class User
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public DateTime BirthDate { get; set; }
        public string MotherName { get; set; }
        public string FatherName { get; set; }
        public DateTime RegistrationDate{ get; set; }
    }
}