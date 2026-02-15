import { SvelteComponent } from 'svelte';

export interface LoadingBar1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingBar1 extends SvelteComponent<LoadingBar1Props> {}
