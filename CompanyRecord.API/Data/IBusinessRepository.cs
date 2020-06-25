using System.Collections.Generic;
using System.Threading.Tasks;
using CompanyRecord.API.Models;

namespace CompanyRecord.API.Data
{
    public interface IBusinessRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<User> GetUser(string username);
         Task<IEnumerable<Company>>GetCompanies(string role, int id);         
         Task<Company>GetCompany(int id);
         Task<IEnumerable<Expense>>GetExpenses(int companyId);
         Task<bool> SaveAll();
    }
}