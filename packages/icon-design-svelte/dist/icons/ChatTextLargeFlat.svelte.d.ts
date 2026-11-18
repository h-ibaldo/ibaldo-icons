import { SvelteComponent } from 'svelte';

export interface ChatTextLargeFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextLargeFlat extends SvelteComponent<ChatTextLargeFlatProps> {}
