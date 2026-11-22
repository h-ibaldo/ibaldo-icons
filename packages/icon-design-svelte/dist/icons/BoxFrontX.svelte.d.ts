import { SvelteComponent } from 'svelte';

export interface BoxFrontXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxFrontX extends SvelteComponent<BoxFrontXProps> {}
