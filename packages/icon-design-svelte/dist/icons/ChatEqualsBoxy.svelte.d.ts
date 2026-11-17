import { SvelteComponent } from 'svelte';

export interface ChatEqualsBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsBoxy extends SvelteComponent<ChatEqualsBoxyProps> {}
