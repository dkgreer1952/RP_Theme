# RP_Theme

## Basic template Razor Pages application illustrating how to implement a light/dark/system selector menu for Bootstrap 5.3.0 and above.

### If Light or Dark is selected, that is stored in the browser's local storage (per machine) and overrides the Windows Light or Dark mode setting.
### If instead System is selected, no setting is stored and the theme will default to the Windows mode setting.
### Notifications
- If System was selected and the browser is open on the application and the Windows mode is changed, the application will be notified and will change its theme accordingly.
- If multiple tabs are open on the application, changing the theme in one will change all open tabs.
### Files of interest:
- _Layout.cshtml
- _LightDarkPartial.cshtml
- site.js


