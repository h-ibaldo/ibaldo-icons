import { SvelteComponent } from 'svelte';

export interface AppWindowCheck1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowCheck1 extends SvelteComponent<AppWindowCheck1Props> {}
