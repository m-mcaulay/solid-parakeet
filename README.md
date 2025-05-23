## 📘 About the Project

**Productivity Pro Registration Form** is a UI implementation task for a Senior UI Engineer role. The goal was to recreate a Figma design of a registration form with attention to:

- **Visual accuracy**
- **Accessibility**
- **Scalable component architecture**
- **Design system alignment**

The project uses **React** and **Tailwind CSS**, with an atomic design breakdown (atoms, molecules, organisms) and is structured for easy future integration with a full design system (via Style Dictionary and theme tokens).

---

## 🚀 Getting Started

To run the project locally:

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

### 3. Open in your browser

Visit: [http://localhost:3000](http://localhost:3000)

# Production Readiness & Design System Considerations

## 🛠️ What I'd Do for Production

If I were preparing this for a full production implementation, I would:

- **Integrate a design token system** using [Style Dictionary](https://amzn.github.io/style-dictionary) to manage colors, typography, spacing, and radii across themes and platforms. For this task, I focused on atomic structure and visual accuracy under time constraints.
- **Set up theming support**, using CSS variables and a `ThemeContext` to enable switching between multiple app-specific themes (as required by the company’s multi-app design system).
- **Introduce Storybook** for documenting atomic and compound components and their variants.
- Add **form validation and feedback states**
- Test for keyboard navigation and screen reader semantics.

## ⏳ What I Didn’t Have Time to Do

Due to time constraints, I focused on clarity, structure, and accessibility, and deferred some things I would normally implement:

- **Design tokens** were used via Tailwind utility classes and semantic naming, but I didn’t extract them into a centralized tokens file + Style Dictionary pipeline.
- **No theme switching** is implemented yet, but it could be supported.
- I did not wire up **runtime styling via CSS variables** or expose tokens in JS for animations or dynamic styling.

## 🔍 Questions I’d Ask the Designer Before Starting

To ensure alignment with design intent and accessibility goals:

1. **What are the theming requirements across different apps?**
2. **Should the form components or Card sections be built for reuse in modals, drawers, pages, etc.?**
3. **What are the expectations for responsiveness / mobile breakpoints?**
4. **Should the button include specific variants or patterns like ghost, destructive, link styles?**
5. **Is there a defined behavior for form validation, error states, or success messages?**
6. **Can I double check the design tokens I have extracted**

## ♿ What I Did to Address Accessibility

The design had some minor accessibility gaps which I addressed in the following way:

- Ensured all `input` fields are associated with labels using `<label htmlFor>`.
- Converted radio buttons into a semantic `<fieldset>` and `<legend>` for screen reader clarity.
- Used `sr-only` to hide radio inputs while preserving accessibility.
- Added focus styles using Tailwind’s `focus:ring-*` utilities.
- Increased contrast of 'Register' button.
