import type { DefineComponent } from 'vue';

export interface TextXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextXCircle: DefineComponent<TextXCircleProps>;

export default TextXCircle;
export { TextXCircle };
