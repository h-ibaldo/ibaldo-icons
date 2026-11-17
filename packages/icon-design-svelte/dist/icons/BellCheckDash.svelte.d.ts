import { SvelteComponent } from 'svelte';

export interface BellCheckDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckDash extends SvelteComponent<BellCheckDashProps> {}
