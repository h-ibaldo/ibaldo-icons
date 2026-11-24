import { SvelteComponent } from 'svelte';

export interface ChatSearchSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchSlant extends SvelteComponent<ChatSearchSlantProps> {}
