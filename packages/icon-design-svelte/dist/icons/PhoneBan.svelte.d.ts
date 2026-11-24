import { SvelteComponent } from 'svelte';

export interface PhoneBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneBan extends SvelteComponent<PhoneBanProps> {}
