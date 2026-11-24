import type { DefineComponent } from 'vue';

export interface TextLigatureProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextLigature: DefineComponent<TextLigatureProps>;

export default TextLigature;
export { TextLigature };
