import { SvelteComponent } from 'svelte';

export interface DesktopDock1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DesktopDock1 extends SvelteComponent<DesktopDock1Props> {}
