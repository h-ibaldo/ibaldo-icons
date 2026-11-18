import { SvelteComponent } from 'svelte';

export interface PointerSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerSync extends SvelteComponent<PointerSyncProps> {}
