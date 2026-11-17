import { SvelteComponent } from 'svelte';

export interface StarWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarWide extends SvelteComponent<StarWideProps> {}
