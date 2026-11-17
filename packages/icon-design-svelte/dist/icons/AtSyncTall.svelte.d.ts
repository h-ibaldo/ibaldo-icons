import { SvelteComponent } from 'svelte';

export interface AtSyncTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSyncTall extends SvelteComponent<AtSyncTallProps> {}
