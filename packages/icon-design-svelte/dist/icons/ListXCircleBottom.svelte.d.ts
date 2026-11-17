import { SvelteComponent } from 'svelte';

export interface ListXCircleBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListXCircleBottom extends SvelteComponent<ListXCircleBottomProps> {}
