import { SvelteComponent } from 'svelte';

export interface NewspaperIsometricProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperIsometric extends SvelteComponent<NewspaperIsometricProps> {}
