import { SvelteComponent } from 'svelte';

export interface Tag2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tag2 extends SvelteComponent<Tag2Props> {}
