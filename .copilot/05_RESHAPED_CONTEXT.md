# Project Context: UI Development with Reshaped

This document provides the core context, standards, and principles for developing the frontend UI of this project using the **Reshaped UI library**. It serves as a guide for AI-assisted development to ensure consistency, quality, and adherence to the library's best practices.

## 1. Core Principles of Reshaped

Reshaped is built on a "balanced approach," sitting between headless UI libraries and heavily styled component libraries. We adhere to its core principles:

- **Quality over Quantity**: We will use a curated set of high-quality, accessible, and widely-used core components. We will not build one-off variations when a standard Reshaped component can be composed to fit the need.
- **Composition First**: We will build complex UI patterns by composing Reshaped's atomic pieces. The library is designed for high composability, and we will leverage this to create flexible and maintainable interfaces.
- **Flexible Theming**: All styling will be managed through Reshaped's theming system, which uses design tokens (CSS variables with an `--rs-` prefix). This ensures brand consistency, accessibility, and automatic dark mode support. **Hardcoded style values (e.g., `color: '#FFF'`) should be avoided.**
- **Long-Term Maintenance**: We rely on Reshaped's commitment to stability, a transparent release strategy, and minimal runtime dependencies. We will use browser-native technologies where possible.

## 2. Technical Setup & Configuration

- **Installation**: Reshaped is installed via `npm install reshaped`.
- **Provider**: The entire application must be wrapped in the `<Reshaped />` provider component. This provider is responsible for injecting the theme and global context.
- **PostCSS**: The project uses a `postcss.config.js` file that imports and extends the Reshaped PostCSS config. This is critical for custom media queries and build optimizations.
- **ESM Build**: We use Reshaped's modern ESM build, which allows for effective tree-shaking.
- **Server-Side Rendering (SSR)**: All components are isomorphic. To prevent FOUC (Flash of Unstyled Content), the root `<html>` element must have the correct `data-rs-theme` and `data-rs-color-mode` attributes.

## 3. Key Components & Usage Patterns

While Reshaped has over 60 components, our application will heavily rely on the following utility and layout components as the primary building blocks.

- **`View`**: This is the most fundamental layout component. It provides a powerful and flexible API for creating flexbox-based layouts.
    - Use `direction`, `gap`, `align`, `justify` for flex control.
    - Use responsive properties for layout changes across breakpoints (e.g., `direction={{ s: "column", l: "row" }}`).
    - `View.Item` should be used for children of a `View` to control properties like `grow` or `columns`.

- **`Container`**: Use this to control the main content area's width and ensure consistent horizontal padding.

- **`Text`**: All typography must be handled by the `Text` component. This ensures that text styles are responsive and adhere to the theme's typographic scale. Do not use native elements like `<p>` or `<h1>` directly for styled text.

- **`Actionable`**: A low-level utility for creating any custom interactive elements (buttons, links, etc.) while ensuring they are accessible and styled correctly.

- **`Icon`**: All icons should be rendered through the `Icon` component, which takes an SVG source (e.g., from `lucide-react`). This component controls appearance and accessibility.

## 4. Theming and Styling

- **Design Tokens**: All custom styling must use Reshaped's design tokens via CSS variables (e.g., `color: var(--rs-color-foreground-neutral)`).
- **Theme Generation**: The project's custom theme is defined in `reshaped.config.js`. Colors can be generated using the `generateThemeColors` helper for consistency. Any changes to the theme require regenerating the theme files via the Reshaped CLI.
- **No CSS-in-JS**: Reshaped does not have a CSS-in-JS runtime dependency. Custom styles can be added via the `className` prop, but this should be used sparingly for utility styles (e.g., positioning, transforms) rather than for component styling.
- **Responsive Properties**: Use the responsive object syntax on component props (e.g., `<Button size={{ s: 'medium', l: 'large' }}>`) to handle styling across different viewports. This is the preferred method over manual media queries.

## 5. Accessibility (A11y)

- **Out-of-the-Box**: Reshaped components are WCAG and WAI-ARIA compliant. We must maintain this level of accessibility.
- **Attributes**: Every component documentation page has an "Accessibility" section. When using a component, review this section and apply any necessary attributes via the `attributes` prop (e.g., `aria-label`).
- **RTL Support**: All styles have automatic Right-To-Left (RTL) support via CSS logical properties. Custom CSS should also use logical properties (e.g., `padding-inline-start` instead of `padding-left`).

***