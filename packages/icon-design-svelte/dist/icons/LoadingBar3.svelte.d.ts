import { SvelteComponent } from 'svelte';

export interface LoadingBar3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingBar3 extends SvelteComponent<LoadingBar3Props> {}
