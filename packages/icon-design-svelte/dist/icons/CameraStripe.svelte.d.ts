import { SvelteComponent } from 'svelte';

export interface CameraStripeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraStripe extends SvelteComponent<CameraStripeProps> {}
