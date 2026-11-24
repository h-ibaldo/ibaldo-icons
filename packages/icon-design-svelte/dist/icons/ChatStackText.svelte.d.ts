import { SvelteComponent } from 'svelte';

export interface ChatStackTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackText extends SvelteComponent<ChatStackTextProps> {}
