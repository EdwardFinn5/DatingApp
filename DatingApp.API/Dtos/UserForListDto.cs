using System;

namespace DatingApp.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; } 
        public string Username { get; set; }
        public string ClassYear { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }    
        public string Hometown { get; set; }
        public string College { get; set; }
        public string PhotoUrl { get; set; }
        public string Major { get; set; }
    }
}