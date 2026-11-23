import type { DefineComponent } from 'vue';

export interface TextCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextC: DefineComponent<TextCProps>;

export default TextC;
export { TextC };
