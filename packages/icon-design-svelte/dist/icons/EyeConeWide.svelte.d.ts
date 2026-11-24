import { SvelteComponent } from 'svelte';

export interface EyeConeWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyeConeWide extends SvelteComponent<EyeConeWideProps> {}
