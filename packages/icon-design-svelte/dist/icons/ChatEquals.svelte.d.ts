import { SvelteComponent } from 'svelte';

export interface ChatEqualsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEquals extends SvelteComponent<ChatEqualsProps> {}
