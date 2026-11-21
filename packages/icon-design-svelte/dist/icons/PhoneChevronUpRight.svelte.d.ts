import { SvelteComponent } from 'svelte';

export interface PhoneChevronUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneChevronUpRight extends SvelteComponent<PhoneChevronUpRightProps> {}
