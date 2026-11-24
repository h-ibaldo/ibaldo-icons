import { SvelteComponent } from 'svelte';

export interface DocumentStackBracketsShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentStackBracketsShadow extends SvelteComponent<DocumentStackBracketsShadowProps> {}
