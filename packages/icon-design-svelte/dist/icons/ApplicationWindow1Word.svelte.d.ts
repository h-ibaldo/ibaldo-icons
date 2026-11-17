import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1WordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1Word extends SvelteComponent<ApplicationWindow1WordProps> {}
