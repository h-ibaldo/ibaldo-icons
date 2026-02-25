import { SvelteComponent } from 'svelte';

export interface DesktopIconsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DesktopIcons extends SvelteComponent<DesktopIconsProps> {}
