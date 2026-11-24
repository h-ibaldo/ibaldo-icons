import type { DefineComponent } from 'vue';

export interface TextNCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextNCircle: DefineComponent<TextNCircleProps>;

export default TextNCircle;
export { TextNCircle };
