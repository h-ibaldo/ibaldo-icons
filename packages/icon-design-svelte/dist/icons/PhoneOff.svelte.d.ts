import { SvelteComponent } from 'svelte';

export interface PhoneOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneOff extends SvelteComponent<PhoneOffProps> {}
