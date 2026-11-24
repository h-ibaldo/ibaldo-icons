import { SvelteComponent } from 'svelte';

export interface MedalStripeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalStripe extends SvelteComponent<MedalStripeProps> {}
