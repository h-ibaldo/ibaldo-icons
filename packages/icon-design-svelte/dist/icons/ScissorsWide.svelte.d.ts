import { SvelteComponent } from 'svelte';

export interface ScissorsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScissorsWide extends SvelteComponent<ScissorsWideProps> {}
