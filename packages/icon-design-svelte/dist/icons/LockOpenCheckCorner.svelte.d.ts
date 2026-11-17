import { SvelteComponent } from 'svelte';

export interface LockOpenCheckCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheckCorner extends SvelteComponent<LockOpenCheckCornerProps> {}
