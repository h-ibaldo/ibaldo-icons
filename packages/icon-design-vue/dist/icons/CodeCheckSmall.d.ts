import type { DefineComponent } from 'vue';

export interface CodeCheckSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeCheckSmall: DefineComponent<CodeCheckSmallProps>;

export default CodeCheckSmall;
export { CodeCheckSmall };
