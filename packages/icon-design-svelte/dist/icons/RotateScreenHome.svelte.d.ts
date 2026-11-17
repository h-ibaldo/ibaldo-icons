import { SvelteComponent } from 'svelte';

export interface RotateScreenHomeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreenHome extends SvelteComponent<RotateScreenHomeProps> {}
