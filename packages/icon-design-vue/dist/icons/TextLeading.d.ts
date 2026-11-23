import type { DefineComponent } from 'vue';

export interface TextLeadingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextLeading: DefineComponent<TextLeadingProps>;

export default TextLeading;
export { TextLeading };
