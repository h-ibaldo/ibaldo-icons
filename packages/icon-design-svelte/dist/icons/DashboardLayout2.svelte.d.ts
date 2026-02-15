import { SvelteComponent } from 'svelte';

export interface DashboardLayout2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardLayout2 extends SvelteComponent<DashboardLayout2Props> {}
