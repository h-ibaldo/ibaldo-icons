import { SvelteComponent } from 'svelte';

export interface TextAdsChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAdsChat extends SvelteComponent<TextAdsChatProps> {}
