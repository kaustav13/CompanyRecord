using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyRecord.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CompanyRecord.API.Data
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly DataContext _context;
        public BusinessRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(string username)
        {
            return await _context.Users.Where(x => x.UserName.ToLower().Equals(username.ToLower())).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Company>> GetCompanies(string role, int id)
        {
            if(role.ToUpper().Equals("ADMIN"))
            {
                return await _context.Companies.ToListAsync();
            }
            else
            {
                return await _context.Companies.Where(x => x.UserId.Equals(id)).ToListAsync();
            }
        }

        public async Task<Company> GetCompany(int id)
        {
            var company = await _context.Companies.Include(p => p.Expenses).FirstOrDefaultAsync(x => x.Id == id);

            return company;
        }

        public async Task<IEnumerable<Expense>> GetExpenses(int companyId)
        {
            return await _context.Expenses.Where(x => x.CompanyId.Equals(companyId)).ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}