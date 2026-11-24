import { SvelteComponent } from 'svelte';

export interface ChatStackMinusCornerFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusCornerFlat extends SvelteComponent<ChatStackMinusCornerFlatProps> {}
