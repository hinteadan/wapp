using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeddingPlannerApi.Authentication
{
    public static class Components
    {
        public static readonly InMemoryAuthenticator Auth = new InMemoryAuthenticator();
    }
}
