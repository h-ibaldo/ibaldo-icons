import { SvelteComponent } from 'svelte';

export interface StarSmileFaceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarSmileFace extends SvelteComponent<StarSmileFaceProps> {}
