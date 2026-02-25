import { SvelteComponent } from 'svelte';

export interface Lock3KeyholeOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3KeyholeOpen extends SvelteComponent<Lock3KeyholeOpenProps> {}
