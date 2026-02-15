import { SvelteComponent } from 'svelte';

export interface HideSidepanelArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HideSidepanelArrowLeft extends SvelteComponent<HideSidepanelArrowLeftProps> {}
