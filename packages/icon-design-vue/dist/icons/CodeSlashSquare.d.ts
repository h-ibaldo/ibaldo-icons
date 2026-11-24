import type { DefineComponent } from 'vue';

export interface CodeSlashSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeSlashSquare: DefineComponent<CodeSlashSquareProps>;

export default CodeSlashSquare;
export { CodeSlashSquare };
