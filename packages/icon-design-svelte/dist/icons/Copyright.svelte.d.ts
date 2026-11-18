import { SvelteComponent } from 'svelte';

export interface CopyrightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Copyright extends SvelteComponent<CopyrightProps> {}
