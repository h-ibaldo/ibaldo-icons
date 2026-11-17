import { SvelteComponent } from 'svelte';

export interface ViewsGroupAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ViewsGroupAdd extends SvelteComponent<ViewsGroupAddProps> {}
