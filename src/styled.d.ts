import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    boxShadow: string;
  }

  export interface DarkTheme {
    bgColor: string;
    textColor: string;
    boxShadow: string;
  }
}
