import type { DefineComponent } from 'vue';

export interface MedalStripeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalStripe: DefineComponent<MedalStripeProps>;

export default MedalStripe;
export { MedalStripe };
