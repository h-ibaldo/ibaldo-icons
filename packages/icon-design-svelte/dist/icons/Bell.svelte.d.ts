import { SvelteComponent } from 'svelte';

export interface BellProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell extends SvelteComponent<BellProps> {}
