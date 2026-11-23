import type { DefineComponent } from 'vue';

export interface TextVCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextVCircle: DefineComponent<TextVCircleProps>;

export default TextVCircle;
export { TextVCircle };
