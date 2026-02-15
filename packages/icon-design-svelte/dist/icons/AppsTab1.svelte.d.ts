import { SvelteComponent } from 'svelte';

export interface AppsTab1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppsTab1 extends SvelteComponent<AppsTab1Props> {}
