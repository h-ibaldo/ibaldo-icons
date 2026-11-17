import { SvelteComponent } from 'svelte';

export interface BagSmileTaperedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagSmileTapered extends SvelteComponent<BagSmileTaperedProps> {}
