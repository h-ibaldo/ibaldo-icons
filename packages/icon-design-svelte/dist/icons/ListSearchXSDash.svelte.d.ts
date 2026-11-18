import { SvelteComponent } from 'svelte';

export interface ListSearchXSDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListSearchXSDash extends SvelteComponent<ListSearchXSDashProps> {}
