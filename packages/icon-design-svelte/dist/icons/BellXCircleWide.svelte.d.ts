import { SvelteComponent } from 'svelte';

export interface BellXCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXCircleWide extends SvelteComponent<BellXCircleWideProps> {}
