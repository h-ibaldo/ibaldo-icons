import { SvelteComponent } from 'svelte';

export interface TagStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagStack extends SvelteComponent<TagStackProps> {}
