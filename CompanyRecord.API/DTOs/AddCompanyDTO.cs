using System;

namespace CompanyRecord.API.DTOs
{
    public class AddCompanyDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string UserName { get; set; }
    }
}