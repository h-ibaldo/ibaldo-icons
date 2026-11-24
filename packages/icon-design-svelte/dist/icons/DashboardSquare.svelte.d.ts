import { SvelteComponent } from 'svelte';

export interface DashboardSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DashboardSquare extends SvelteComponent<DashboardSquareProps> {}
