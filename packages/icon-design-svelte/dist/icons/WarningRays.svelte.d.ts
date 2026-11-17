import { SvelteComponent } from 'svelte';

export interface WarningRaysProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningRays extends SvelteComponent<WarningRaysProps> {}
