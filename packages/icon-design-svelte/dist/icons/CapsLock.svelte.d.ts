import { SvelteComponent } from 'svelte';

export interface CapsLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CapsLock extends SvelteComponent<CapsLockProps> {}
