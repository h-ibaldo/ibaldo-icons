import { SvelteComponent } from 'svelte';

export interface WindowSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSearch extends SvelteComponent<WindowSearchProps> {}
