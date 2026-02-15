import { SvelteComponent } from 'svelte';

export interface AppsTab2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppsTab2 extends SvelteComponent<AppsTab2Props> {}
