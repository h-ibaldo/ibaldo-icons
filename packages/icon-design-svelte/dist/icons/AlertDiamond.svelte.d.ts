import { SvelteComponent } from 'svelte';

export interface AlertDiamondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertDiamond extends SvelteComponent<AlertDiamondProps> {}
