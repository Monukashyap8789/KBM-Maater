using KBM.UI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KBM.UI.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AboutUs()
        {
            return View();
        }
        public IActionResult ContactUs()
        {
            return View();
        }
        public IActionResult Education()
        {
            return View();
        }
        public IActionResult Health()
        {
            return View();
        }
        public IActionResult Environment()
        {
            return View();
        }
        public IActionResult Sports()
        {
            return View();
        }
        public IActionResult Empolyment()
        {
            return View();
        }
        public IActionResult EriticationOfSocialEvent()
        {
            return View();
        }
        public IActionResult Event()
        {
            return View();
        }
        public IActionResult OurJourney()
        {
            return View();
        }
        public IActionResult VijayKumarMahto()
        {
            return View();
        }
        public IActionResult PradeepKumar()
        {
            return View();
        }
        public IActionResult BirjuMahto()
        {
            return View();
        }
        public IActionResult AmleshKumarMahto()
        {
            return View();
        }
        public IActionResult BaijnathMahto()
        {
            return View();
        }
        public IActionResult ArjunMahto()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
