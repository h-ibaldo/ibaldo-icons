import { SvelteComponent } from 'svelte';

export interface DashboardLayout1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardLayout1 extends SvelteComponent<DashboardLayout1Props> {}
