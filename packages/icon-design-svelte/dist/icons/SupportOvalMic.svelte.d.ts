import { SvelteComponent } from 'svelte';

export interface SupportOvalMicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SupportOvalMic extends SvelteComponent<SupportOvalMicProps> {}
