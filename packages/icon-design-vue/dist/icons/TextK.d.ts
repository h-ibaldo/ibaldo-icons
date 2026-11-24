import type { DefineComponent } from 'vue';

export interface TextKProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextK: DefineComponent<TextKProps>;

export default TextK;
export { TextK };
