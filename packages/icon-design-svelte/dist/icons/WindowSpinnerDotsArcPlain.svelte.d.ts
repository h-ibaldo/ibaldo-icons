import { SvelteComponent } from 'svelte';

export interface WindowSpinnerDotsArcPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerDotsArcPlain extends SvelteComponent<WindowSpinnerDotsArcPlainProps> {}
