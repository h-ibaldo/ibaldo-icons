import { SvelteComponent } from 'svelte';

export interface CopyrightSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CopyrightSmall extends SvelteComponent<CopyrightSmallProps> {}
