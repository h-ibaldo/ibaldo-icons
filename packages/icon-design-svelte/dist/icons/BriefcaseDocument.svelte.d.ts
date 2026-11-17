import { SvelteComponent } from 'svelte';

export interface BriefcaseDocumentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseDocument extends SvelteComponent<BriefcaseDocumentProps> {}
