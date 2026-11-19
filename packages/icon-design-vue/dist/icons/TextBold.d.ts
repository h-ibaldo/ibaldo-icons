import type { DefineComponent } from 'vue';

export interface TextBoldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextBold: DefineComponent<TextBoldProps>;

export default TextBold;
export { TextBold };
