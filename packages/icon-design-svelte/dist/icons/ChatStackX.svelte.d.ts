import { SvelteComponent } from 'svelte';

export interface ChatStackXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackX extends SvelteComponent<ChatStackXProps> {}
