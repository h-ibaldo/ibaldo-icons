import { SvelteComponent } from 'svelte';

export interface CalendarWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarWarning extends SvelteComponent<CalendarWarningProps> {}
