import { SvelteComponent } from 'svelte';

export interface DocumentStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentStack extends SvelteComponent<DocumentStackProps> {}
