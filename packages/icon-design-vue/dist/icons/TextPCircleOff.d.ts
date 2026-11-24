import type { DefineComponent } from 'vue';

export interface TextPCircleOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextPCircleOff: DefineComponent<TextPCircleOffProps>;

export default TextPCircleOff;
export { TextPCircleOff };
