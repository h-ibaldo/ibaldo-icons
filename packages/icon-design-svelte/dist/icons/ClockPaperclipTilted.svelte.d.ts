import { SvelteComponent } from 'svelte';

export interface ClockPaperclipTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPaperclipTilted extends SvelteComponent<ClockPaperclipTiltedProps> {}
