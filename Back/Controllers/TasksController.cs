using Back.Data;
using Back.Models;
using Back.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Back.Controllers
{
    [ApiController]
    [Route("v1")]
    public class TasksController : ControllerBase
    {
        [HttpGet]
        [Route("tasks")]
        public async Task<IActionResult> Get([FromServices]AppDbContext dbContext){
                var tasks = await dbContext.tasks
        .OrderBy(task => task.priority)
        .AsNoTracking()
        .ToListAsync();
            return Ok(tasks);
        }
        
        [HttpGet]
        [Route("tasks/{id}")]
        public async Task<IActionResult> GetById([FromServices]AppDbContext dbContext, [FromRoute]int id){
            var task = await dbContext.tasks.AsNoTracking().FirstOrDefaultAsync(x=>x.id == id);
            return Ok(task);
        }
        [HttpPost]
        [Route("tasks")]
        public async Task<IActionResult> Post([FromServices]AppDbContext dbContext, [FromBody]RequestTasksModels request){
            if(!ModelState.IsValid)
                return BadRequest();

            var task = new Tasks{
                task = request.task,
                responsible = request.responsible,
                priority = request.priority,
                status = request.status,
                deadline = request.deadline,
            };
            try{
                await dbContext.tasks.AddAsync(task);
                await dbContext.SaveChangesAsync();
                return Created($"v1/tasks/{task.id}", task);
            }
            catch{
                return BadRequest();
            }
        }
        [HttpPut]
        [Route("tasks/{id}")]
        public async Task<IActionResult> Put([FromServices]AppDbContext dbContext, [FromBody]RequestTasksModels request, [FromRoute] int id){
            if(!ModelState.IsValid)
                return BadRequest();

            var task = await dbContext.tasks.FirstOrDefaultAsync(x=>x.id == id);
            if (task == null){
                return NotFound();
            }

            try{
                task.task = request.task;
                task.status = request.status;
                task.responsible = request.responsible;
                task.priority = request.priority;
                task.deadline = request.deadline;

                dbContext.tasks.Update(task);

                await dbContext.SaveChangesAsync();
                return Ok(task);
            }
            catch{
                return BadRequest();
            }
        }
        [HttpDelete]
        [Route("tasks/{id}")]
        public async Task<IActionResult> Delete([FromServices]AppDbContext dbContext, [FromRoute]int id){
            var task = await dbContext.tasks.AsNoTracking().FirstOrDefaultAsync(x=>x.id == id);
            try{

                dbContext.tasks.Remove(task);
                dbContext.SaveChanges();
                return Ok();
            }
            catch{
                return NotFound();
            }
        }
    }
}