import { SvelteComponent } from 'svelte';

export interface WindowSyncLargePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSyncLargePlain extends SvelteComponent<WindowSyncLargePlainProps> {}
