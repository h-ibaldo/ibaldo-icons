import { SvelteComponent } from 'svelte';

export interface ClockPaperclipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPaperclip extends SvelteComponent<ClockPaperclipProps> {}
