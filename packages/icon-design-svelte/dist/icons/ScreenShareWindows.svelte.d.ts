import { SvelteComponent } from 'svelte';

export interface ScreenShareWindowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareWindows extends SvelteComponent<ScreenShareWindowsProps> {}
