using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeddingPlannerApi.Authentication
{
    public class InMemoryAuthenticator
    {
        static readonly Dictionary<string, Identity> users = new Dictionary<string, Identity>() {
            { "hintee", new Identity("hintee", "123qwe") },
            { "dori", new Identity("dori", "123qwe") },
        };

        public Identity Authenticate(string user, string pass)
        {
            return users.SingleOrDefault(x => x.Key.Equals(user, StringComparison.InvariantCultureIgnoreCase)).Value ?? Identity.None;
        }
    }
}
