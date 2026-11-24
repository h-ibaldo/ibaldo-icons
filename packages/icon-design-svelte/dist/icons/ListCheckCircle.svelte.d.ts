import { SvelteComponent } from 'svelte';

export interface ListCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListCheckCircle extends SvelteComponent<ListCheckCircleProps> {}
