import { SvelteComponent } from 'svelte';

export interface AtSyncBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSyncBoxy extends SvelteComponent<AtSyncBoxyProps> {}
