import type { DefineComponent } from 'vue';

export interface SeparatorHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SeparatorHorizontal: DefineComponent<SeparatorHorizontalProps>;

export default SeparatorHorizontal;
export { SeparatorHorizontal };
