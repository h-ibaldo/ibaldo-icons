import { SvelteComponent } from 'svelte';

export interface ChatStackMinusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusBoxy extends SvelteComponent<ChatStackMinusBoxyProps> {}
