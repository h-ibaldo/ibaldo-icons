import type { DefineComponent } from 'vue';

export interface TextJProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextJ: DefineComponent<TextJProps>;

export default TextJ;
export { TextJ };
