import { SvelteComponent } from 'svelte';

export interface BellPlusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellPlusWide extends SvelteComponent<BellPlusWideProps> {}
