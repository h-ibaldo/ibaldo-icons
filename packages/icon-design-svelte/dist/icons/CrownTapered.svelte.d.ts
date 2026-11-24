import { SvelteComponent } from 'svelte';

export interface CrownTaperedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownTapered extends SvelteComponent<CrownTaperedProps> {}
