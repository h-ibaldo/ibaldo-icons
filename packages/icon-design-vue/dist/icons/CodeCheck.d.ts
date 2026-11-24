import type { DefineComponent } from 'vue';

export interface CodeCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeCheck: DefineComponent<CodeCheckProps>;

export default CodeCheck;
export { CodeCheck };
