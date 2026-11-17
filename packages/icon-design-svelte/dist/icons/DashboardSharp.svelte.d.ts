import { SvelteComponent } from 'svelte';

export interface DashboardSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardSharp extends SvelteComponent<DashboardSharpProps> {}
