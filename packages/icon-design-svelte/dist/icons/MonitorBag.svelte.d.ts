import { SvelteComponent } from 'svelte';

export interface MonitorBagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorBag extends SvelteComponent<MonitorBagProps> {}
