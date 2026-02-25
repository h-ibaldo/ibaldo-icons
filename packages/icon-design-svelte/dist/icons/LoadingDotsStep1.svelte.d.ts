import { SvelteComponent } from 'svelte';

export interface LoadingDotsStep1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingDotsStep1 extends SvelteComponent<LoadingDotsStep1Props> {}
