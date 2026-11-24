import { SvelteComponent } from 'svelte';

export interface LassoWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LassoWide extends SvelteComponent<LassoWideProps> {}
