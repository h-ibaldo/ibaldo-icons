import { SvelteComponent } from 'svelte';

export interface AtRefreshTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtRefreshTall extends SvelteComponent<AtRefreshTallProps> {}
