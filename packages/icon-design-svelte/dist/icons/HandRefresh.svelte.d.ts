import { SvelteComponent } from 'svelte';

export interface HandRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandRefresh extends SvelteComponent<HandRefreshProps> {}
