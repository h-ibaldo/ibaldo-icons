import { SvelteComponent } from 'svelte';

export interface Lock2KeyholeOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock2KeyholeOpen extends SvelteComponent<Lock2KeyholeOpenProps> {}
