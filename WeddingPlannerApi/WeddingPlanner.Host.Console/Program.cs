using Nancy.Hosting.Self;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeddingPlanner.Host.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var host = new NancyHost(new Uri("http://localhost:9969"));
            host.Start();

            System.Console.WriteLine($"WeddingPlannerApi started @ ${DateTime.Now}");
            System.Console.WriteLine("Press key to stop");
            System.Console.ReadKey();
            host.Stop();
        }
    }
}
