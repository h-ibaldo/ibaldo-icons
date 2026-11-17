import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2BulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2Bulb extends SvelteComponent<ApplicationWindow2BulbProps> {}
