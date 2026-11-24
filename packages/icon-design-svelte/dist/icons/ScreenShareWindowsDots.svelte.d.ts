import { SvelteComponent } from 'svelte';

export interface ScreenShareWindowsDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareWindowsDots extends SvelteComponent<ScreenShareWindowsDotsProps> {}
