import { SvelteComponent } from 'svelte';

export interface ChatStackCheckCornerFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckCornerFlat extends SvelteComponent<ChatStackCheckCornerFlatProps> {}
