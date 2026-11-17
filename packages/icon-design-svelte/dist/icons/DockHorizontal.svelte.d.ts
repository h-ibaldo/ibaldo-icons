import { SvelteComponent } from 'svelte';

export interface DockHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockHorizontal extends SvelteComponent<DockHorizontalProps> {}
