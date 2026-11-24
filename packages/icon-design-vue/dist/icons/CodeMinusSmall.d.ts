import type { DefineComponent } from 'vue';

export interface CodeMinusSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeMinusSmall: DefineComponent<CodeMinusSmallProps>;

export default CodeMinusSmall;
export { CodeMinusSmall };
