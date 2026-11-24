import type { DefineComponent } from 'vue';

export interface MobileOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileOff: DefineComponent<MobileOffProps>;

export default MobileOff;
export { MobileOff };
