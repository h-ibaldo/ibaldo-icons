import { SvelteComponent } from 'svelte';

export interface TagDividerDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagDividerDashed extends SvelteComponent<TagDividerDashedProps> {}
