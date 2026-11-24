import type { DefineComponent } from 'vue';

export interface TextTCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextTCircle: DefineComponent<TextTCircleProps>;

export default TextTCircle;
export { TextTCircle };
