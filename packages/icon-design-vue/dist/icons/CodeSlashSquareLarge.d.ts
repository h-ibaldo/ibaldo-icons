import type { DefineComponent } from 'vue';

export interface CodeSlashSquareLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeSlashSquareLarge: DefineComponent<CodeSlashSquareLargeProps>;

export default CodeSlashSquareLarge;
export { CodeSlashSquareLarge };
