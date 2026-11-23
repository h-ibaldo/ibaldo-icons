import type { DefineComponent } from 'vue';

export interface TextUProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextU: DefineComponent<TextUProps>;

export default TextU;
export { TextU };
