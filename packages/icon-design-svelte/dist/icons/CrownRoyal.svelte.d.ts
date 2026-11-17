import { SvelteComponent } from 'svelte';

export interface CrownRoyalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownRoyal extends SvelteComponent<CrownRoyalProps> {}
