import type { DefineComponent } from 'vue';

export interface TextQCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextQCircle: DefineComponent<TextQCircleProps>;

export default TextQCircle;
export { TextQCircle };
