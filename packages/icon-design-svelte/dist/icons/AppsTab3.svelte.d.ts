import { SvelteComponent } from 'svelte';

export interface AppsTab3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppsTab3 extends SvelteComponent<AppsTab3Props> {}
