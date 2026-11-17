import { SvelteComponent } from 'svelte';

export interface ApplicationWindowRocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowRocket extends SvelteComponent<ApplicationWindowRocketProps> {}
