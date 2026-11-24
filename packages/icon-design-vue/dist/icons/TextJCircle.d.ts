import type { DefineComponent } from 'vue';

export interface TextJCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextJCircle: DefineComponent<TextJCircleProps>;

export default TextJCircle;
export { TextJCircle };
