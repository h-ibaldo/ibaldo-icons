import type { DefineComponent } from 'vue';

export interface CameraStripeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CameraStripe: DefineComponent<CameraStripeProps>;

export default CameraStripe;
export { CameraStripe };
