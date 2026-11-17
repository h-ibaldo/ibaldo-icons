import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Check extends SvelteComponent<ApplicationWindow2CheckProps> {}
