import type { DefineComponent } from 'vue';

export interface SeparatorVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SeparatorVertical: DefineComponent<SeparatorVerticalProps>;

export default SeparatorVertical;
export { SeparatorVertical };
