import { SvelteComponent } from 'svelte';

export interface EyeView1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeView1 extends SvelteComponent<EyeView1Props> {}
