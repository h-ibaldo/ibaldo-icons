import { SvelteComponent } from 'svelte';

export interface TrashSyncDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashSyncDetached extends SvelteComponent<TrashSyncDetachedProps> {}
