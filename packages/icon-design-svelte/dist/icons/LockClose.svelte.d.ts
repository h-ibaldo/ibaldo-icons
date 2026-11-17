import { SvelteComponent } from 'svelte';

export interface LockCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockClose extends SvelteComponent<LockCloseProps> {}
