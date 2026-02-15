import { SvelteComponent } from 'svelte';

export interface HideSidepanelArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HideSidepanelArrowRight extends SvelteComponent<HideSidepanelArrowRightProps> {}
