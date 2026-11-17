import { SvelteComponent } from 'svelte';

export interface ChatStackPlusCornerFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusCornerFlat extends SvelteComponent<ChatStackPlusCornerFlatProps> {}
