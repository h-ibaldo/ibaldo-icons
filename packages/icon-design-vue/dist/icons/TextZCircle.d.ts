import type { DefineComponent } from 'vue';

export interface TextZCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextZCircle: DefineComponent<TextZCircleProps>;

export default TextZCircle;
export { TextZCircle };
