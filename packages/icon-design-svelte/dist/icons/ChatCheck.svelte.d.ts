import { SvelteComponent } from 'svelte';

export interface ChatCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheck extends SvelteComponent<ChatCheckProps> {}
