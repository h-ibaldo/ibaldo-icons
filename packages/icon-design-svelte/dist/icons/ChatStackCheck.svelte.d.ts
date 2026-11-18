import { SvelteComponent } from 'svelte';

export interface ChatStackCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheck extends SvelteComponent<ChatStackCheckProps> {}
