import { SvelteComponent } from 'svelte';

export interface PhoneArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowRight extends SvelteComponent<PhoneArrowRightProps> {}
