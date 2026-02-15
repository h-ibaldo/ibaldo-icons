import { SvelteComponent } from 'svelte';

export interface AddPlusCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlusCircle2 extends SvelteComponent<AddPlusCircle2Props> {}
