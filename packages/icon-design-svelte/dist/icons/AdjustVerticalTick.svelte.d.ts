import { SvelteComponent } from 'svelte';

export interface AdjustVerticalTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdjustVerticalTick extends SvelteComponent<AdjustVerticalTickProps> {}
