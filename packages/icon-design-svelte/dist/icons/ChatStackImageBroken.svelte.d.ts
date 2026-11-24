import { SvelteComponent } from 'svelte';

export interface ChatStackImageBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackImageBroken extends SvelteComponent<ChatStackImageBrokenProps> {}
