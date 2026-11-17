import { SvelteComponent } from 'svelte';

export interface Lock2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock2Check extends SvelteComponent<Lock2CheckProps> {}
