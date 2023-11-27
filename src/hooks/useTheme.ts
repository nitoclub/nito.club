import { useEffect, useState } from 'react';

export default function useTheme(): string {
  const [themeValue, setThemeValue] = useState('');

  useEffect(() => {
    setThemeValue(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
  }, []);

  return themeValue;
}
