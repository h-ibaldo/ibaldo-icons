import { SvelteComponent } from 'svelte';

export interface ChatStackLetterTSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLetterTSlant extends SvelteComponent<ChatStackLetterTSlantProps> {}
