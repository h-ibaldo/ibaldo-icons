import type { DefineComponent } from 'vue';

export interface CodePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodePlus: DefineComponent<CodePlusProps>;

export default CodePlus;
export { CodePlus };
