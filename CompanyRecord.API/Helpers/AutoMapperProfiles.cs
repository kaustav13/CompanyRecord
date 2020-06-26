using AutoMapper;
using CompanyRecord.API.DTOs;
using CompanyRecord.API.Models;

namespace CompanyRecord.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Company, CompanyForDetailedDTO>();
            CreateMap<Company, CompanyForListDTO>();
            CreateMap<Expense, ExpensesForDTO>();
        }
    }
}