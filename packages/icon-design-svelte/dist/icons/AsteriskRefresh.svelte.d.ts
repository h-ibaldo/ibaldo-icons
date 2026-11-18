import { SvelteComponent } from 'svelte';

export interface AsteriskRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AsteriskRefresh extends SvelteComponent<AsteriskRefreshProps> {}
