import { SvelteComponent } from 'svelte';

export interface TriangleOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TriangleOffWide extends SvelteComponent<TriangleOffWideProps> {}
