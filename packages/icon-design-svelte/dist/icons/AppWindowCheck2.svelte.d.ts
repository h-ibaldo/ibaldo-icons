import { SvelteComponent } from 'svelte';

export interface AppWindowCheck2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowCheck2 extends SvelteComponent<AppWindowCheck2Props> {}
