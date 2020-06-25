using System;
using System.Collections.Generic;

namespace CompanyRecord.API.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public ICollection<Expense> Expenses { get; set; }
        public User User {get;set;}
        public int UserId { get; set; }
    }
}