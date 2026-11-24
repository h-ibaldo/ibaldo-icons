import { SvelteComponent } from 'svelte';

export interface PhoneArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowUpRight extends SvelteComponent<PhoneArrowUpRightProps> {}
