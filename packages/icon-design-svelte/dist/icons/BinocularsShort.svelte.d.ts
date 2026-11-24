import { SvelteComponent } from 'svelte';

export interface BinocularsShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsShort extends SvelteComponent<BinocularsShortProps> {}
