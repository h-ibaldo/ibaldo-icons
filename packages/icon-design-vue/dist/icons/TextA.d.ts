import type { DefineComponent } from 'vue';

export interface TextAProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextA: DefineComponent<TextAProps>;

export default TextA;
export { TextA };
