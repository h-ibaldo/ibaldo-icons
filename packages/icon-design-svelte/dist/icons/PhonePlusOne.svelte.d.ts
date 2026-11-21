import { SvelteComponent } from 'svelte';

export interface PhonePlusOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhonePlusOne extends SvelteComponent<PhonePlusOneProps> {}
