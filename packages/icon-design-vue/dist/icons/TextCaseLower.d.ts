import type { DefineComponent } from 'vue';

export interface TextCaseLowerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextCaseLower: DefineComponent<TextCaseLowerProps>;

export default TextCaseLower;
export { TextCaseLower };
