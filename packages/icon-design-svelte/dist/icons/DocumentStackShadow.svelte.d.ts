import { SvelteComponent } from 'svelte';

export interface DocumentStackShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentStackShadow extends SvelteComponent<DocumentStackShadowProps> {}
