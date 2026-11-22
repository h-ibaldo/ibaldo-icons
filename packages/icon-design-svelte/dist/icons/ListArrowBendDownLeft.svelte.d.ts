import { SvelteComponent } from 'svelte';

export interface ListArrowBendDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListArrowBendDownLeft extends SvelteComponent<ListArrowBendDownLeftProps> {}
