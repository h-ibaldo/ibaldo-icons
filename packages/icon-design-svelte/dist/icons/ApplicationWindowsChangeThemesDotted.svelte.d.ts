import { SvelteComponent } from 'svelte';

export interface ApplicationWindowsChangeThemesDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowsChangeThemesDotted extends SvelteComponent<ApplicationWindowsChangeThemesDottedProps> {}
