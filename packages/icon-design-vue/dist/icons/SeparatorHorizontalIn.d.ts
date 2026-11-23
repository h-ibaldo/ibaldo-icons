import type { DefineComponent } from 'vue';

export interface SeparatorHorizontalInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SeparatorHorizontalIn: DefineComponent<SeparatorHorizontalInProps>;

export default SeparatorHorizontalIn;
export { SeparatorHorizontalIn };
