import { SvelteComponent } from 'svelte';

export interface LoadingBar4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingBar4 extends SvelteComponent<LoadingBar4Props> {}
