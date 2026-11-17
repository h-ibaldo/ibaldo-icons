import { SvelteComponent } from 'svelte';

export interface WindowSealPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSealPlain extends SvelteComponent<WindowSealPlainProps> {}
