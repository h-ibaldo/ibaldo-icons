import { SvelteComponent } from 'svelte';

export interface WarningDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningDashed extends SvelteComponent<WarningDashedProps> {}
