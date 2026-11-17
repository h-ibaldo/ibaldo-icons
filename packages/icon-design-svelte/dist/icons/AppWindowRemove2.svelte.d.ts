import { SvelteComponent } from 'svelte';

export interface AppWindowRemove2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowRemove2 extends SvelteComponent<AppWindowRemove2Props> {}
