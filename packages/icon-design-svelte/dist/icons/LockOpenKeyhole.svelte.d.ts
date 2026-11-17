import { SvelteComponent } from 'svelte';

export interface LockOpenKeyholeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenKeyhole extends SvelteComponent<LockOpenKeyholeProps> {}
