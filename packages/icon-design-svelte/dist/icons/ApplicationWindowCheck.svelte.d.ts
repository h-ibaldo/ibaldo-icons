import { SvelteComponent } from 'svelte';

export interface ApplicationWindowCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowCheck extends SvelteComponent<ApplicationWindowCheckProps> {}
