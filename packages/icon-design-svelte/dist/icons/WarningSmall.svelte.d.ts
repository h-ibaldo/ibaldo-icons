import { SvelteComponent } from 'svelte';

export interface WarningSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningSmall extends SvelteComponent<WarningSmallProps> {}
