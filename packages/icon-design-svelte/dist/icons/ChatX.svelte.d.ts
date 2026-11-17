import { SvelteComponent } from 'svelte';

export interface ChatXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatX extends SvelteComponent<ChatXProps> {}
