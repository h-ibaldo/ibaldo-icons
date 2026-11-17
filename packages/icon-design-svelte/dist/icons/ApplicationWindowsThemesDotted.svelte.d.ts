import { SvelteComponent } from 'svelte';

export interface ApplicationWindowsThemesDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowsThemesDotted extends SvelteComponent<ApplicationWindowsThemesDottedProps> {}
