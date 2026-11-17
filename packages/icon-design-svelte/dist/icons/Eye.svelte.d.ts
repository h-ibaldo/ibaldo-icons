import { SvelteComponent } from 'svelte';

export interface EyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Eye extends SvelteComponent<EyeProps> {}
