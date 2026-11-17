import { SvelteComponent } from 'svelte';

export interface BinocularsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsTall extends SvelteComponent<BinocularsTallProps> {}
