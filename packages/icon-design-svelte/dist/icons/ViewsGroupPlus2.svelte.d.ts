import { SvelteComponent } from 'svelte';

export interface ViewsGroupPlus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ViewsGroupPlus2 extends SvelteComponent<ViewsGroupPlus2Props> {}
