Coding Standards & Best Practices
This document establishes the project-specific coding standards, ensuring consistency and quality.

Component Structure: All components will be functional components using React Hooks.

Styling: All UI styling, layout, and component implementation must strictly adhere to the principles and patterns defined in the docs/05_RESHAPED_CONTEXT.md file. No custom CSS or other styling methods should be used.

State Management: For this simple application, all state will be managed within the App.jsx component using the useState and useEffect hooks. No external state management libraries (like Redux or Zustand) are needed.

Icons: All icons must be imported from the lucide-react library and rendered using the Reshaped <Icon> component, as specified in the Reshaped context guide.

File Naming: Component files will be named using PascalCase (e.g., StockCard.jsx).

Props:

Props should be clearly defined and destructured at the beginning of the component function.

Use descriptive prop names.

Accessibility: Ensure all interactive elements have appropriate aria-label attributes where necessary, passed via the attributes prop on Reshaped components.

Documentation Reference:

Project UI Guide: docs/05_RESHAPED_CONTEXT.md is the primary guide for how we use the UI library in this project.

Official Library Docs: The official Reshaped documentation (https://www.google.com/search?q=https://reshaped.so/docs) is the source of truth for component API details and available props.