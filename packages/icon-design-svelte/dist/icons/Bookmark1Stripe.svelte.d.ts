import { SvelteComponent } from 'svelte';

export interface Bookmark1StripeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Stripe extends SvelteComponent<Bookmark1StripeProps> {}
