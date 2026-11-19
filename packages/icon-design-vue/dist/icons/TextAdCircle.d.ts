import type { DefineComponent } from 'vue';

export interface TextAdCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAdCircle: DefineComponent<TextAdCircleProps>;

export default TextAdCircle;
export { TextAdCircle };
