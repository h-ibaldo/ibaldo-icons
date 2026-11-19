import type { DefineComponent } from 'vue';

export interface CodeXSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeXSmall: DefineComponent<CodeXSmallProps>;

export default CodeXSmall;
export { CodeXSmall };
