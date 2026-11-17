import { SvelteComponent } from 'svelte';

export interface HeartPlusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartPlusWide extends SvelteComponent<HeartPlusWideProps> {}
