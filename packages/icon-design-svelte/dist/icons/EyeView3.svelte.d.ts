import { SvelteComponent } from 'svelte';

export interface EyeView3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeView3 extends SvelteComponent<EyeView3Props> {}
