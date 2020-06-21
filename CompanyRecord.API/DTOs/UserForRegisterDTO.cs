using System.ComponentModel.DataAnnotations;

namespace CompanyRecord.API.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        [EmailAddress]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4,ErrorMessage="Password must be between 6 to 8 characters")]
        public string Password {get;set;}
    }
}