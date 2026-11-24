import { SvelteComponent } from 'svelte';

export interface ListHeartDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListHeartDash extends SvelteComponent<ListHeartDashProps> {}
