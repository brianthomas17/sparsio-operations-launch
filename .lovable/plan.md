

## Open Contact Form from Navbar "Let's Talk" Buttons

The Hero button already scrolls to `#contact` and dispatches the `open-contact-form` custom event. The Navbar buttons (desktop and mobile) only use `<a href="#contact">` — they scroll but don't open the form.

### Fix in `src/components/Navbar.tsx`

Change both "Let's Talk" links (desktop on ~line 48 and mobile on ~line 82) from `<a>` tags to `<button>` elements that:
1. Scroll to `#contact` smoothly
2. Dispatch the `open-contact-form` custom event (same pattern as the Hero button)

This matches the existing Hero button behavior — no new logic needed in CTABanner since it already listens for this event.

