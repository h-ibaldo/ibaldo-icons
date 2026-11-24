import { SvelteComponent } from 'svelte';

export interface ChatStackTextSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextSlant extends SvelteComponent<ChatStackTextSlantProps> {}
