import { SvelteComponent } from 'svelte';

export interface AppWindowPlay2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowPlay2 extends SvelteComponent<AppWindowPlay2Props> {}
