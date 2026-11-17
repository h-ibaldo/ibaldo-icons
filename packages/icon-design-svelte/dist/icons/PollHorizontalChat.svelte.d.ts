import { SvelteComponent } from 'svelte';

export interface PollHorizontalChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollHorizontalChat extends SvelteComponent<PollHorizontalChatProps> {}
