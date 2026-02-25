import { SvelteComponent } from 'svelte';

export interface LoadingDotsStep3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoadingDotsStep3 extends SvelteComponent<LoadingDotsStep3Props> {}
