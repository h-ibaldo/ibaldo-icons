import { SvelteComponent } from 'svelte';

export interface Lock5CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Close extends SvelteComponent<Lock5CloseProps> {}
