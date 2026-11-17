import { SvelteComponent } from 'svelte';

export interface EyeView5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeView5 extends SvelteComponent<EyeView5Props> {}
