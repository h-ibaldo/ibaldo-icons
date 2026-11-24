import type { DefineComponent } from 'vue';

export interface TextLProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextL: DefineComponent<TextLProps>;

export default TextL;
export { TextL };
