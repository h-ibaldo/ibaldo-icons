import type { DefineComponent } from 'vue';

export interface TextGProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextG: DefineComponent<TextGProps>;

export default TextG;
export { TextG };
