import { SvelteComponent } from 'svelte';

export interface JustifyCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class JustifyCenter extends SvelteComponent<JustifyCenterProps> {}
