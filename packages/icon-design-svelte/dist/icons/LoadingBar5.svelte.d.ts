import { SvelteComponent } from 'svelte';

export interface LoadingBar5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingBar5 extends SvelteComponent<LoadingBar5Props> {}
