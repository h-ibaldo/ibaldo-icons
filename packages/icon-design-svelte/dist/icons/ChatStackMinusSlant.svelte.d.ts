import { SvelteComponent } from 'svelte';

export interface ChatStackMinusSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusSlant extends SvelteComponent<ChatStackMinusSlantProps> {}
