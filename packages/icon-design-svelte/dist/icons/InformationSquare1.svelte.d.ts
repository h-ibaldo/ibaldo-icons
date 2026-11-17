import { SvelteComponent } from 'svelte';

export interface InformationSquare1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InformationSquare1 extends SvelteComponent<InformationSquare1Props> {}
