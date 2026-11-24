import { SvelteComponent } from 'svelte';

export interface CrownUnderlineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownUnderline extends SvelteComponent<CrownUnderlineProps> {}
