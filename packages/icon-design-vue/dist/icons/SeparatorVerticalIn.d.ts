import type { DefineComponent } from 'vue';

export interface SeparatorVerticalInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SeparatorVerticalIn: DefineComponent<SeparatorVerticalInProps>;

export default SeparatorVerticalIn;
export { SeparatorVerticalIn };
