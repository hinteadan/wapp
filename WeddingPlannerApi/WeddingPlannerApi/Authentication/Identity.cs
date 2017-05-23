using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeddingPlannerApi.Authentication
{
    public class Identity
    {
        public static readonly Identity None = new Identity();

        public readonly string Username;
        public readonly string PasswordHash;

        private Identity()
        {

        }

        public Identity(string user, string passHash)
        {
            this.Username = user;
            this.PasswordHash = passHash;
        }

        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(this.Username);
        }
    }
}
