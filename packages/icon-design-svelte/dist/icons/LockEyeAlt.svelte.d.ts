import { SvelteComponent } from 'svelte';

export interface LockEyeAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyeAlt extends SvelteComponent<LockEyeAltProps> {}
