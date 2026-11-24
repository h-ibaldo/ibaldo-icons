import type { DefineComponent } from 'vue';

export interface TextLCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextLCircle: DefineComponent<TextLCircleProps>;

export default TextLCircle;
export { TextLCircle };
