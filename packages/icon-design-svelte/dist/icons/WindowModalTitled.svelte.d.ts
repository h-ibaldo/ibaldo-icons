import { SvelteComponent } from 'svelte';

export interface WindowModalTitledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowModalTitled extends SvelteComponent<WindowModalTitledProps> {}
