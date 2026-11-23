import type { DefineComponent } from 'vue';

export interface SpellCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpellCheck: DefineComponent<SpellCheckProps>;

export default SpellCheck;
export { SpellCheck };
