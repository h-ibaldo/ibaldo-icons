import { SvelteComponent } from 'svelte';

export interface DashboardPieTrendUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardPieTrendUp extends SvelteComponent<DashboardPieTrendUpProps> {}
