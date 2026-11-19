import type { DefineComponent } from 'vue';

export interface BoxOpenSpreadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxOpenSpread: DefineComponent<BoxOpenSpreadProps>;

export default BoxOpenSpread;
export { BoxOpenSpread };
