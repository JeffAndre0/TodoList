using System.ComponentModel.DataAnnotations;

namespace Back.ViewModels
{
    public class RequestTasksModels
    {
        [Required]
        public string task { get; set; }
        public string? responsible { get; set; }
        public int? priority { get; set; }
        public int? status { get; set; }
        public DateOnly? deadline { get; set; } 
    }
}