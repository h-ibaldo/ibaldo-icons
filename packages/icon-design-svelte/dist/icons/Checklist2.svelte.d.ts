import { SvelteComponent } from 'svelte';

export interface Checklist2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Checklist2 extends SvelteComponent<Checklist2Props> {}
