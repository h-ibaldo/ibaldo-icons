import type { DefineComponent } from 'vue';

export interface TextFProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextF: DefineComponent<TextFProps>;

export default TextF;
export { TextF };
