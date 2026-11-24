import { SvelteComponent } from 'svelte';

export interface PhoneChevronDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneChevronDownLeft extends SvelteComponent<PhoneChevronDownLeftProps> {}
