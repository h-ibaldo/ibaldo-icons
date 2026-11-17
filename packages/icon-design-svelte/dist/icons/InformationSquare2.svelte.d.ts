import { SvelteComponent } from 'svelte';

export interface InformationSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InformationSquare2 extends SvelteComponent<InformationSquare2Props> {}
