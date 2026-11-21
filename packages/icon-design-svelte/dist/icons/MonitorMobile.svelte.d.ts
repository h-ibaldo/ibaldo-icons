import { SvelteComponent } from 'svelte';

export interface MonitorMobileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorMobile extends SvelteComponent<MonitorMobileProps> {}
