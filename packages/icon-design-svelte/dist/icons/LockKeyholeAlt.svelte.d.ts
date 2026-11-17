import { SvelteComponent } from 'svelte';

export interface LockKeyholeAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockKeyholeAlt extends SvelteComponent<LockKeyholeAltProps> {}
