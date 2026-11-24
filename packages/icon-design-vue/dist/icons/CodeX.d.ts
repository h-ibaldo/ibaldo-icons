import type { DefineComponent } from 'vue';

export interface CodeXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeX: DefineComponent<CodeXProps>;

export default CodeX;
export { CodeX };
