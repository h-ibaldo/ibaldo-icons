import type { DefineComponent } from 'vue';

export interface TextOProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextO: DefineComponent<TextOProps>;

export default TextO;
export { TextO };
