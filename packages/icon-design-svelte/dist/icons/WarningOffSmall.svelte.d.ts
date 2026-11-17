import { SvelteComponent } from 'svelte';

export interface WarningOffSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningOffSmall extends SvelteComponent<WarningOffSmallProps> {}
