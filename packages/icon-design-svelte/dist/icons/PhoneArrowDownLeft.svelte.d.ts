import { SvelteComponent } from 'svelte';

export interface PhoneArrowDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowDownLeft extends SvelteComponent<PhoneArrowDownLeftProps> {}
