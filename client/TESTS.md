# Manual Test Checklist — ProfileSettingsForm

## 1. Empty submit
- [ ] Load the form with both "Full Name" and "Email" empty.
- [ ] Confirm the "Save" button is disabled by default.
- [ ] Try clicking "Save" anyway (should be a no-op since it's disabled).
- **Result:** ✅ Save stays disabled until both fields pass validation, so an empty submit cannot actually happen.

## 2. Invalid email
- [ ] Enter a valid name (e.g. "Ali Khan").
- [ ] Enter an invalid email (e.g. "ali@khan") and blur out of the field.
- [ ] Confirm the error "Please enter a valid email address." appears under the Email field.
- [ ] Confirm "Save" remains disabled.
- **Result:** ✅ Works as expected.

## 3. Valid submit
- [ ] Enter a valid name (2+ characters) and a valid email (e.g. "ali@example.com").
- [ ] Confirm "Save" becomes enabled.
- [ ] Click "Save".
- [ ] Confirm the form data is logged to the console.
- [ ] Confirm a temporary success message appears, and disappears after a few seconds.
- **Result:** ✅ Works as expected.

## 4. Blur behavior
- [ ] Click into "Full Name", type a single character, then click away (blur) without submitting.
- [ ] Confirm the "Full name must be at least 2 characters." error appears only after blur — not while actively typing.
- [ ] Repeat for the "Email" field with a partial/invalid email.
- **Result:** ✅ Errors only appear after a field is touched (blurred) or after a submit attempt — not on every keystroke.

## Notes
- No extra fields, theming, or notifications were added — scope kept strictly to Full Name + Email as specified.
- Labels are linked to inputs via `htmlFor`/`id`, and errors are associated via `aria-describedby` for screen reader accessibility.
