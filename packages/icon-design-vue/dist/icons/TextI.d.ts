import type { DefineComponent } from 'vue';

export interface TextIProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextI: DefineComponent<TextIProps>;

export default TextI;
export { TextI };
