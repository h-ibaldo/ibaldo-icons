import { SvelteComponent } from 'svelte';

export interface WindowSyncPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSyncPlain extends SvelteComponent<WindowSyncPlainProps> {}
