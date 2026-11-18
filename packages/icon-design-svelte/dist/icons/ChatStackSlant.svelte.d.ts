import { SvelteComponent } from 'svelte';

export interface ChatStackSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSlant extends SvelteComponent<ChatStackSlantProps> {}
