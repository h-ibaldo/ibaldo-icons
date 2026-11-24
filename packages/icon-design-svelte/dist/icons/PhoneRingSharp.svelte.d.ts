import { SvelteComponent } from 'svelte';

export interface PhoneRingSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneRingSharp extends SvelteComponent<PhoneRingSharpProps> {}
