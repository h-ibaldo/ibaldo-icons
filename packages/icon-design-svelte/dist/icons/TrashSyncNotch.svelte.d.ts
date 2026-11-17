import { SvelteComponent } from 'svelte';

export interface TrashSyncNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashSyncNotch extends SvelteComponent<TrashSyncNotchProps> {}
