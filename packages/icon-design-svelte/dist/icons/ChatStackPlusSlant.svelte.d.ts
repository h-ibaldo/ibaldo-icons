import { SvelteComponent } from 'svelte';

export interface ChatStackPlusSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusSlant extends SvelteComponent<ChatStackPlusSlantProps> {}
