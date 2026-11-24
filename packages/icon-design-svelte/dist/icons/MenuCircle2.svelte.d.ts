import { SvelteComponent } from 'svelte';

export interface MenuCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuCircle2 extends SvelteComponent<MenuCircle2Props> {}
