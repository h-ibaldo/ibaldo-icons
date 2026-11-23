import type { DefineComponent } from 'vue';

export interface TextXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextX: DefineComponent<TextXProps>;

export default TextX;
export { TextX };
