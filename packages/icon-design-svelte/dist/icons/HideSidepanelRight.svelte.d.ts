import { SvelteComponent } from 'svelte';

export interface HideSidepanelRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HideSidepanelRight extends SvelteComponent<HideSidepanelRightProps> {}
