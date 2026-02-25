import { SvelteComponent } from 'svelte';

export interface WindowControlRestoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlRestore extends SvelteComponent<WindowControlRestoreProps> {}
