import type { DefineComponent } from 'vue';

export interface CheckCircleOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpen: DefineComponent<CheckCircleOpenProps>;

export default CheckCircleOpen;
export { CheckCircleOpen };
