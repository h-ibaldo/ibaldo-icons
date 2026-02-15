import { SvelteComponent } from 'svelte';

export interface Lock5KeyholeOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5KeyholeOpen extends SvelteComponent<Lock5KeyholeOpenProps> {}
