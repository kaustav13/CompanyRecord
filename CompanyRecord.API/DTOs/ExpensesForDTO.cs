using System;

namespace CompanyRecord.API.DTOs
{
    public class ExpensesForDTO
    {
        public int Id { get; set; }
        public string PaidTo { get; set; }
        public string Description { get; set; }
        public float Amount { get; set; }
        public string MethodOfPayment { get; set; }
        public DateTime PaidOn { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
    }
}