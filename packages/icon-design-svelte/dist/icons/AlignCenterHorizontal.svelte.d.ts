import { SvelteComponent } from 'svelte';

export interface AlignCenterHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignCenterHorizontal extends SvelteComponent<AlignCenterHorizontalProps> {}
