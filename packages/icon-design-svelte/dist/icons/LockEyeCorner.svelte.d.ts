import { SvelteComponent } from 'svelte';

export interface LockEyeCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyeCorner extends SvelteComponent<LockEyeCornerProps> {}
