import { SvelteComponent } from 'svelte';

export interface LoadingBar2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingBar2 extends SvelteComponent<LoadingBar2Props> {}
