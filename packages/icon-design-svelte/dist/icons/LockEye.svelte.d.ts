import { SvelteComponent } from 'svelte';

export interface LockEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEye extends SvelteComponent<LockEyeProps> {}
