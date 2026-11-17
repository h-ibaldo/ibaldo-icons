import { SvelteComponent } from 'svelte';

export interface OnlineShopNotebookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OnlineShopNotebook extends SvelteComponent<OnlineShopNotebookProps> {}
