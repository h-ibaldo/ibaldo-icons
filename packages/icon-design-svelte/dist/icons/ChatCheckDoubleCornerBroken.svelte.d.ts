import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleCornerBroken extends SvelteComponent<ChatCheckDoubleCornerBrokenProps> {}
