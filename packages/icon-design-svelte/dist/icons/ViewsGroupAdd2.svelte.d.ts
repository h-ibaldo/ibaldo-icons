import { SvelteComponent } from 'svelte';

export interface ViewsGroupAdd2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ViewsGroupAdd2 extends SvelteComponent<ViewsGroupAdd2Props> {}
