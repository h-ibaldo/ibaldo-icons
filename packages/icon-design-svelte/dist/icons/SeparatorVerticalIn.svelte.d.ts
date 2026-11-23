import { SvelteComponent } from 'svelte';

export interface SeparatorVerticalInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SeparatorVerticalIn extends SvelteComponent<SeparatorVerticalInProps> {}
