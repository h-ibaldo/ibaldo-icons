import { SvelteComponent } from 'svelte';

export interface AtRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtRefresh extends SvelteComponent<AtRefreshProps> {}
