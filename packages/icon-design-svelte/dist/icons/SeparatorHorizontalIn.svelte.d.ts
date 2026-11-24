import { SvelteComponent } from 'svelte';

export interface SeparatorHorizontalInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SeparatorHorizontalIn extends SvelteComponent<SeparatorHorizontalInProps> {}
