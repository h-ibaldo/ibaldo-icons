import { SvelteComponent } from 'svelte';

export interface EyeView4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeView4 extends SvelteComponent<EyeView4Props> {}
