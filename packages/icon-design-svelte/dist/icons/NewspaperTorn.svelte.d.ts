import { SvelteComponent } from 'svelte';

export interface NewspaperTornProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperTorn extends SvelteComponent<NewspaperTornProps> {}
