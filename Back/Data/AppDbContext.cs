using Back.Models;
using Microsoft.EntityFrameworkCore;

namespace Back.Data {
    public class AppDbContext : DbContext {
        private readonly IConfiguration _configuration;

    public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration)
        : base(options){
        _configuration = configuration;
    }
        public DbSet<Tasks> tasks { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}