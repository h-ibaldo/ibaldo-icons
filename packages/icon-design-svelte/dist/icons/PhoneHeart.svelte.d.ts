import { SvelteComponent } from 'svelte';

export interface PhoneHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneHeart extends SvelteComponent<PhoneHeartProps> {}
