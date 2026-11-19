import type { DefineComponent } from 'vue';

export interface MobileCartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileCart: DefineComponent<MobileCartProps>;

export default MobileCart;
export { MobileCart };
