import { SvelteComponent } from 'svelte';

export interface AppWindowRemove1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowRemove1 extends SvelteComponent<AppWindowRemove1Props> {}
