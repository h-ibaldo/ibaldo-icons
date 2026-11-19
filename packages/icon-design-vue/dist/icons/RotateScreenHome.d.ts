import type { DefineComponent } from 'vue';

export interface RotateScreenHomeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RotateScreenHome: DefineComponent<RotateScreenHomeProps>;

export default RotateScreenHome;
export { RotateScreenHome };
