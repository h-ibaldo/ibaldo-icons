import { SvelteComponent } from 'svelte';

export interface CrownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Crown extends SvelteComponent<CrownProps> {}
