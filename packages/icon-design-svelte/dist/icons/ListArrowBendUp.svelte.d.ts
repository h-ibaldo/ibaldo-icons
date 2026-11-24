import { SvelteComponent } from 'svelte';

export interface ListArrowBendUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListArrowBendUp extends SvelteComponent<ListArrowBendUpProps> {}
