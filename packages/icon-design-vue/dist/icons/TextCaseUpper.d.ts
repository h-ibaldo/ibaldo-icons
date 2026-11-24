import type { DefineComponent } from 'vue';

export interface TextCaseUpperProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextCaseUpper: DefineComponent<TextCaseUpperProps>;

export default TextCaseUpper;
export { TextCaseUpper };
