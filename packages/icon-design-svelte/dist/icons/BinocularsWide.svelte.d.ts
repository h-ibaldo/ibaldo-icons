import { SvelteComponent } from 'svelte';

export interface BinocularsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsWide extends SvelteComponent<BinocularsWideProps> {}
