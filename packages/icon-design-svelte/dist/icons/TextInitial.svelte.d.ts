import { SvelteComponent } from 'svelte';

export interface TextInitialProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextInitial extends SvelteComponent<TextInitialProps> {}
