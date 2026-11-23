import type { DefineComponent } from 'vue';

export interface TextZProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextZ: DefineComponent<TextZProps>;

export default TextZ;
export { TextZ };
