import { SvelteComponent } from 'svelte';

export interface DashboardLayout12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardLayout12 extends SvelteComponent<DashboardLayout12Props> {}
