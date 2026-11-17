import { SvelteComponent } from 'svelte';

export interface LockOpenCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheck extends SvelteComponent<LockOpenCheckProps> {}
