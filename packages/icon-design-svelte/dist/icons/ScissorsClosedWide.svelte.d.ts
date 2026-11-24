import { SvelteComponent } from 'svelte';

export interface ScissorsClosedWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScissorsClosedWide extends SvelteComponent<ScissorsClosedWideProps> {}
