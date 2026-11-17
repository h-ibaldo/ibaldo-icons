import { SvelteComponent } from 'svelte';

export interface HideSidepanelLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HideSidepanelLeft extends SvelteComponent<HideSidepanelLeftProps> {}
