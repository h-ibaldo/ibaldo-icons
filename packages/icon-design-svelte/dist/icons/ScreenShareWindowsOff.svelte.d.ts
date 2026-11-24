import { SvelteComponent } from 'svelte';

export interface ScreenShareWindowsOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareWindowsOff extends SvelteComponent<ScreenShareWindowsOffProps> {}
