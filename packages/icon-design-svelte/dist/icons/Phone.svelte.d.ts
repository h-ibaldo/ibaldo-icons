import { SvelteComponent } from 'svelte';

export interface PhoneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Phone extends SvelteComponent<PhoneProps> {}
