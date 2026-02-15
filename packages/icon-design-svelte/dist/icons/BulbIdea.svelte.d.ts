import { SvelteComponent } from 'svelte';

export interface BulbIdeaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BulbIdea extends SvelteComponent<BulbIdeaProps> {}
