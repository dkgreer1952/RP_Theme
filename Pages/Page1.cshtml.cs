using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RP_Theme.Pages;

public enum HaveReadType
{
    Any,
    Yes,
    No
}

public class Page1Model : PageModel
{
    public void OnGet()
    {
    }
}
