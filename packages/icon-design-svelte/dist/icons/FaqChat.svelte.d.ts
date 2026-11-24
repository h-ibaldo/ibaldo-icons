import { SvelteComponent } from 'svelte';

export interface FaqChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaqChat extends SvelteComponent<FaqChatProps> {}
