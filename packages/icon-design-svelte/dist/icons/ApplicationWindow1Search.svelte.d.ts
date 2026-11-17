import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1SearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1Search extends SvelteComponent<ApplicationWindow1SearchProps> {}
