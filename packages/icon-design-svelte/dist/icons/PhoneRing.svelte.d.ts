import { SvelteComponent } from 'svelte';

export interface PhoneRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneRing extends SvelteComponent<PhoneRingProps> {}
