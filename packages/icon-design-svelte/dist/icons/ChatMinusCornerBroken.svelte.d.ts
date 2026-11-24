import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCornerBroken extends SvelteComponent<ChatMinusCornerBrokenProps> {}
