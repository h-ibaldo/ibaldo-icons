import { SvelteComponent } from 'svelte';

export interface PollChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollChat extends SvelteComponent<PollChatProps> {}
