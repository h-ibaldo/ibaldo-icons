import { SvelteComponent } from 'svelte';

export interface RotateScreenTabLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreenTabLeft extends SvelteComponent<RotateScreenTabLeftProps> {}
