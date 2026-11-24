import { SvelteComponent } from 'svelte';

export interface PhoneClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneClock extends SvelteComponent<PhoneClockProps> {}
