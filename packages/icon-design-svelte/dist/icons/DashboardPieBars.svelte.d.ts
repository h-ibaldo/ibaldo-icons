import { SvelteComponent } from 'svelte';

export interface DashboardPieBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardPieBars extends SvelteComponent<DashboardPieBarsProps> {}
