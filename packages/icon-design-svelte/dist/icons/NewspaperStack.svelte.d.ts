import { SvelteComponent } from 'svelte';

export interface NewspaperStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperStack extends SvelteComponent<NewspaperStackProps> {}
