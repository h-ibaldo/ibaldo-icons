import { SvelteComponent } from 'svelte';

export interface NewspaperRolledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperRolled extends SvelteComponent<NewspaperRolledProps> {}
