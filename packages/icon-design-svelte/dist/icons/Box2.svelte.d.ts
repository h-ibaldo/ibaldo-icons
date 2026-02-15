import { SvelteComponent } from 'svelte';

export interface Box2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box2 extends SvelteComponent<Box2Props> {}
