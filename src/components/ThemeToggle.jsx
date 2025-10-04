import { Button, useTheme } from 'reshaped';

function ThemeToggle() {
  const { colorMode, setColorMode } = useTheme();
  
  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="medium"
      onClick={toggleTheme}
      attributes={{ 'aria-label': `Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode` }}
    >
      {colorMode === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}

export default ThemeToggle;
