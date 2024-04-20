namespace Back.Models
{
    public class Tasks
    {
        public int id { get; set; }
        public string task { get; set; }
        public string? responsible { get; set; }
        public int? priority { get; set; }
        public int? status { get; set; }
        public DateOnly? deadline { get; set; }
    }
}