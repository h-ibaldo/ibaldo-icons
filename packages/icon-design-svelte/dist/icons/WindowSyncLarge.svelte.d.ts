import { SvelteComponent } from 'svelte';

export interface WindowSyncLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSyncLarge extends SvelteComponent<WindowSyncLargeProps> {}
