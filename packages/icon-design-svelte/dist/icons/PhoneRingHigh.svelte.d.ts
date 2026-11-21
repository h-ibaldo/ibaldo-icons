import { SvelteComponent } from 'svelte';

export interface PhoneRingHighProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneRingHigh extends SvelteComponent<PhoneRingHighProps> {}
