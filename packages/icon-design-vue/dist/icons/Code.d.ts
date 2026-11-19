import type { DefineComponent } from 'vue';

export interface CodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Code: DefineComponent<CodeProps>;

export default Code;
export { Code };
