import { SvelteComponent } from 'svelte';

export interface ChatOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOff extends SvelteComponent<ChatOffProps> {}
