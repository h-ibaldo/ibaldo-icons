import { SvelteComponent } from 'svelte';

export interface CompassDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassDashed extends SvelteComponent<CompassDashedProps> {}
