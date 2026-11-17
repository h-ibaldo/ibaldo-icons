import { SvelteComponent } from 'svelte';

export interface BagSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagSide extends SvelteComponent<BagSideProps> {}
