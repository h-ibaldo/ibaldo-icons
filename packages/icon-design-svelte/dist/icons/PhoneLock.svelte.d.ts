import { SvelteComponent } from 'svelte';

export interface PhoneLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneLock extends SvelteComponent<PhoneLockProps> {}
