import { SvelteComponent } from 'svelte';

export interface DashboardLayout3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardLayout3 extends SvelteComponent<DashboardLayout3Props> {}
