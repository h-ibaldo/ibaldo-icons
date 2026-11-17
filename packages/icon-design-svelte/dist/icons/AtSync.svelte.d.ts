import { SvelteComponent } from 'svelte';

export interface AtSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSync extends SvelteComponent<AtSyncProps> {}
