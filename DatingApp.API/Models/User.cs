using System;
using System.Collections.Generic;

namespace DatingApp.API.Models
{
    public class User
    {
        public int Id { get; set; } 
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }                                                                                                                                                                                                                                        
        public byte[] PasswordSalt { get; set; }
        public string ClassYear { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }    
        public string Major { get; set; }
        public string LookingFor { get; set; }
        public string Experiences { get; set; }
        public string Hometown { get; set; }
        public string College { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}