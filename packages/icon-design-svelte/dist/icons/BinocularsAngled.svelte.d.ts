import { SvelteComponent } from 'svelte';

export interface BinocularsAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsAngled extends SvelteComponent<BinocularsAngledProps> {}
