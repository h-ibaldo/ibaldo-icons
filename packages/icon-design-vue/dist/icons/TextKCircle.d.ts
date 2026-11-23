import type { DefineComponent } from 'vue';

export interface TextKCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextKCircle: DefineComponent<TextKCircleProps>;

export default TextKCircle;
export { TextKCircle };
