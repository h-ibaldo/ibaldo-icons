import type { DefineComponent } from 'vue';

export interface TextAaSquareLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAaSquareLarge: DefineComponent<TextAaSquareLargeProps>;

export default TextAaSquareLarge;
export { TextAaSquareLarge };
