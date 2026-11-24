import { SvelteComponent } from 'svelte';

export interface CalendarFlipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarFlip extends SvelteComponent<CalendarFlipProps> {}
