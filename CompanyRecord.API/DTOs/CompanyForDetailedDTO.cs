using System;
using System.Collections.Generic;
using CompanyRecord.API.Models;

namespace CompanyRecord.API.DTOs
{
    public class CompanyForDetailedDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public ICollection<ExpensesForDTO> Expenses { get; set; }
    }
}