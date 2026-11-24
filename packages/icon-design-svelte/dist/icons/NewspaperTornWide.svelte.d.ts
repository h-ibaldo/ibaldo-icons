import { SvelteComponent } from 'svelte';

export interface NewspaperTornWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperTornWide extends SvelteComponent<NewspaperTornWideProps> {}
