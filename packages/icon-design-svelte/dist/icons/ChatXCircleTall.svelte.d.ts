import { SvelteComponent } from 'svelte';

export interface ChatXCircleTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleTall extends SvelteComponent<ChatXCircleTallProps> {}
