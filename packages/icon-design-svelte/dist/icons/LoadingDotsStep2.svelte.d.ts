import { SvelteComponent } from 'svelte';

export interface LoadingDotsStep2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingDotsStep2 extends SvelteComponent<LoadingDotsStep2Props> {}
