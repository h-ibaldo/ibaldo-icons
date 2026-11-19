import type { DefineComponent } from 'vue';

export interface BanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Ban: DefineComponent<BanProps>;

export default Ban;
export { Ban };
