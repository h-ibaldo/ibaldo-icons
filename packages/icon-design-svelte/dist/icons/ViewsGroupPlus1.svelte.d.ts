import { SvelteComponent } from 'svelte';

export interface ViewsGroupPlus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ViewsGroupPlus1 extends SvelteComponent<ViewsGroupPlus1Props> {}
