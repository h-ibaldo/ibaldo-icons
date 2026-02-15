import { SvelteComponent } from 'svelte';

export interface DashboardLayout4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardLayout4 extends SvelteComponent<DashboardLayout4Props> {}
