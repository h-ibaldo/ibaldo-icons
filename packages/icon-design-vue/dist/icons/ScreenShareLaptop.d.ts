import type { DefineComponent } from 'vue';

export interface ScreenShareLaptopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenShareLaptop: DefineComponent<ScreenShareLaptopProps>;

export default ScreenShareLaptop;
export { ScreenShareLaptop };
