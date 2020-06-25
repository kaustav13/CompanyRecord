using System.Threading.Tasks;
using CompanyRecord.API.Data;
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
        public CompanyController(IBusinessRepository repo)
        {
          _repo = repo;
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetCompanies(string username)
        {
             var user = await _repo.GetUser(username);             

             var companies = await _repo.GetCompanies(user.Role, user.Id);

             return Ok(companies);
        }

        [HttpGet("{id}/{companyname}")]
        public async Task<IActionResult> GetCompany(int id)
        {
             var company = await _repo.GetCompany(id);

             return Ok(company);
        }
    }
}