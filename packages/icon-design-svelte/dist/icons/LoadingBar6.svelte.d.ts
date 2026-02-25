import { SvelteComponent } from 'svelte';

export interface LoadingBar6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingBar6 extends SvelteComponent<LoadingBar6Props> {}
