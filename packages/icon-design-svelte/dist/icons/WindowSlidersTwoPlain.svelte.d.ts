import { SvelteComponent } from 'svelte';

export interface WindowSlidersTwoPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSlidersTwoPlain extends SvelteComponent<WindowSlidersTwoPlainProps> {}
