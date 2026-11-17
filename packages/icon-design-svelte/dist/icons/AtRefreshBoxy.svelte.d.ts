import { SvelteComponent } from 'svelte';

export interface AtRefreshBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtRefreshBoxy extends SvelteComponent<AtRefreshBoxyProps> {}
