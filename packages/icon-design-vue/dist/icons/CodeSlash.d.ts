import type { DefineComponent } from 'vue';

export interface CodeSlashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeSlash: DefineComponent<CodeSlashProps>;

export default CodeSlash;
export { CodeSlash };
