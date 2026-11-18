import { SvelteComponent } from 'svelte';

export interface WindowSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSync extends SvelteComponent<WindowSyncProps> {}
