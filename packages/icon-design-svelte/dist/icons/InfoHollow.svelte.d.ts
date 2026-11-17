import { SvelteComponent } from 'svelte';

export interface InfoHollowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoHollow extends SvelteComponent<InfoHollowProps> {}
