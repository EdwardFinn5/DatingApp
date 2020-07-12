using System;
using System.Collections.Generic;
using DatingApp.API.Models;

namespace DatingApp.API.Dtos
{
    public class UserForDetailedDto
    {
       public int Id { get; set; } 
        public string Username { get; set; }
        public string ClassYear { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }    
        public string Major { get; set; }
        public string LookingFor { get; set; }
        public string Experiences { get; set; }
        public string Hometown { get; set; }
        public string College { get; set; } 
        public string PhotoUrl { get; set; }
        public string Gender { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}