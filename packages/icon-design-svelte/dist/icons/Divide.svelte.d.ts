import { SvelteComponent } from 'svelte';

export interface DivideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Divide extends SvelteComponent<DivideProps> {}
