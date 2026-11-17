import { SvelteComponent } from 'svelte';

export interface CalendarLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarLock extends SvelteComponent<CalendarLockProps> {}
