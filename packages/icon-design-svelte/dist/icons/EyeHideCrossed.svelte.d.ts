import { SvelteComponent } from 'svelte';

export interface EyeHideCrossedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeHideCrossed extends SvelteComponent<EyeHideCrossedProps> {}
