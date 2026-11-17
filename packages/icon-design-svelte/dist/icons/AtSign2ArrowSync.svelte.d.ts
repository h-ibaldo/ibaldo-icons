import { SvelteComponent } from 'svelte';

export interface AtSign2ArrowSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2ArrowSync extends SvelteComponent<AtSign2ArrowSyncProps> {}
