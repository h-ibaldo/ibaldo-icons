import { SvelteComponent } from 'svelte';

export interface WrenchWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchWide extends SvelteComponent<WrenchWideProps> {}
