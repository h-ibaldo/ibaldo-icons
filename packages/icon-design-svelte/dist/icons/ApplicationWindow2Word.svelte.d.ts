import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2WordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Word extends SvelteComponent<ApplicationWindow2WordProps> {}
