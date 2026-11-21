import type { DefineComponent } from 'vue';

export interface MobileUserNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileUserNotch: DefineComponent<MobileUserNotchProps>;

export default MobileUserNotch;
export { MobileUserNotch };
