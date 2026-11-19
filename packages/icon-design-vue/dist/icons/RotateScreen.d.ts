import type { DefineComponent } from 'vue';

export interface RotateScreenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RotateScreen: DefineComponent<RotateScreenProps>;

export default RotateScreen;
export { RotateScreen };
