import { SvelteComponent } from 'svelte';

export interface TagStackOffsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagStackOffset extends SvelteComponent<TagStackOffsetProps> {}
