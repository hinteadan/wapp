using Nancy;
using Nancy.Extensions;
using Nancy.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeddingPlannerApi
{
    public class AuthModule : NancyModule
    {
        internal class AuthDto
        {
            public string User;
            public string Pass;
        }

        public AuthModule() : base("/auth")
        {
            Post["/"] = _ => Authenticate(this.Bind<AuthDto>());
        }

        private dynamic Authenticate(AuthDto authDto)
        {
            if (authDto.User.Equals("hintee", StringComparison.InvariantCultureIgnoreCase))
            {
                return HttpStatusCode.Accepted;
            }

            return HttpStatusCode.Unauthorized;
        }
    }
}
