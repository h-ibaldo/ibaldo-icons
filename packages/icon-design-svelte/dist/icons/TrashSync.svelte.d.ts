import { SvelteComponent } from 'svelte';

export interface TrashSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashSync extends SvelteComponent<TrashSyncProps> {}
