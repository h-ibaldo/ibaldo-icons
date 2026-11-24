import { SvelteComponent } from 'svelte';

export interface PhoneMusicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneMusic extends SvelteComponent<PhoneMusicProps> {}
