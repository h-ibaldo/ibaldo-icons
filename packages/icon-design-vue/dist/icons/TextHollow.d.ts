import type { DefineComponent } from 'vue';

export interface TextHollowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextHollow: DefineComponent<TextHollowProps>;

export default TextHollow;
export { TextHollow };
