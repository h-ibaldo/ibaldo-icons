import { SvelteComponent } from 'svelte';

export interface LockPasswordAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockPasswordAlt extends SvelteComponent<LockPasswordAltProps> {}
