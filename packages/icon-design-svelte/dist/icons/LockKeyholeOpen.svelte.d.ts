import { SvelteComponent } from 'svelte';

export interface LockKeyholeOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockKeyholeOpen extends SvelteComponent<LockKeyholeOpenProps> {}
