import { SvelteComponent } from 'svelte';

export interface Lock2CheckOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock2CheckOpen extends SvelteComponent<Lock2CheckOpenProps> {}
