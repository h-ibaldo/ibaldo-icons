import type { DefineComponent } from 'vue';

export interface CodePlusSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodePlusSmall: DefineComponent<CodePlusSmallProps>;

export default CodePlusSmall;
export { CodePlusSmall };
