using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using CompanyRecord.API.Data;
using CompanyRecord.API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CompanyRecord.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly IBusinessRepository _repo;
        private readonly IMapper _mapper;
        public CompanyController(IBusinessRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetCompanies(string username)
        {
            var user = await _repo.GetUser(username);

            var companies = await _repo.GetCompanies(user.Role, user.Id);

            var companiesToReturn = _mapper.Map<IEnumerable<CompanyForListDTO>>(companies);

            return Ok(companiesToReturn);
        }

        [HttpGet("{id}/{companyname}")]
        public async Task<IActionResult> GetCompany(int id)
        {
            var company = await _repo.GetCompany(id);

            var companyToReturn = _mapper.Map<CompanyForDetailedDTO>(company);

            return Ok(companyToReturn);
        }
    }
}