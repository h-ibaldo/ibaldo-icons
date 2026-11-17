import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2SearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Search extends SvelteComponent<ApplicationWindow2SearchProps> {}
