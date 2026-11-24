import type { DefineComponent } from 'vue';

export interface TextRCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextRCircle: DefineComponent<TextRCircleProps>;

export default TextRCircle;
export { TextRCircle };
