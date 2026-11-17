import { SvelteComponent } from 'svelte';

export interface ChatStackPlusBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusBroken extends SvelteComponent<ChatStackPlusBrokenProps> {}
