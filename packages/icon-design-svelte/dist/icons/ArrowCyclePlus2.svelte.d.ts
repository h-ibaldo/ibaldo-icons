import { SvelteComponent } from 'svelte';

export interface ArrowCyclePlus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCyclePlus2 extends SvelteComponent<ArrowCyclePlus2Props> {}
