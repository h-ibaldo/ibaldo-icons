import { SvelteComponent } from 'svelte';

export interface SelfieButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SelfieButton extends SvelteComponent<SelfieButtonProps> {}
