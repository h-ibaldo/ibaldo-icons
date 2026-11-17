import { SvelteComponent } from 'svelte';

export interface EyeView2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeView2 extends SvelteComponent<EyeView2Props> {}
