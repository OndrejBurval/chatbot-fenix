import { useMemo } from 'react';

interface ThemeOptions {
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}

export const useTheme = (theme?: ThemeOptions) => {
  const themeStyles = useMemo(() => ({
    '--primary-color': theme?.primaryColor,
    '--background-color': theme?.backgroundColor,
    '--text-color': theme?.textColor,
    '--font-family': theme?.fontFamily,
  } as React.CSSProperties), [theme]);

  return themeStyles;
};
