interface ThemeOptions {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
}
export declare const useTheme: (theme?: ThemeOptions) => import('react').CSSProperties;
export {};
