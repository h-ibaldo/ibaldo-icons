import { SvelteComponent } from 'svelte';

export interface WindowSpinnerRaysPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerRaysPlain extends SvelteComponent<WindowSpinnerRaysPlainProps> {}
