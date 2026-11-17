import { SvelteComponent } from 'svelte';

export interface InformationCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InformationCircle2 extends SvelteComponent<InformationCircle2Props> {}
