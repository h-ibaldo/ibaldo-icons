import { SvelteComponent } from 'svelte';

export interface PhoneCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneCheck extends SvelteComponent<PhoneCheckProps> {}
