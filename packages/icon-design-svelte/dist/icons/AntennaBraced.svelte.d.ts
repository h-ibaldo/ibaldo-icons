import { SvelteComponent } from 'svelte';

export interface AntennaBracedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AntennaBraced extends SvelteComponent<AntennaBracedProps> {}
