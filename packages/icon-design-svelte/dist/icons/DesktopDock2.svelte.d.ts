import { SvelteComponent } from 'svelte';

export interface DesktopDock2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DesktopDock2 extends SvelteComponent<DesktopDock2Props> {}
