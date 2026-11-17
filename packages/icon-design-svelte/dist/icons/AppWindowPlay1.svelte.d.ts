import { SvelteComponent } from 'svelte';

export interface AppWindowPlay1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowPlay1 extends SvelteComponent<AppWindowPlay1Props> {}
