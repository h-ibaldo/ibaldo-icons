import { SvelteComponent } from 'svelte';

export interface WindowBoltWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBoltWide extends SvelteComponent<WindowBoltWideProps> {}
