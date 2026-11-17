import { SvelteComponent } from 'svelte';

export interface RestoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Restore extends SvelteComponent<RestoreProps> {}
