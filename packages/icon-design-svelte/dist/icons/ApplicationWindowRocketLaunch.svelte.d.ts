import { SvelteComponent } from 'svelte';

export interface ApplicationWindowRocketLaunchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowRocketLaunch extends SvelteComponent<ApplicationWindowRocketLaunchProps> {}
