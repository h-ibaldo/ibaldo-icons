import { SvelteComponent } from 'svelte';

export interface DashboardLayout32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardLayout32 extends SvelteComponent<DashboardLayout32Props> {}
