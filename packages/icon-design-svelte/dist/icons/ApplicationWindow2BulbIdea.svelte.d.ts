import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2BulbIdeaProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2BulbIdea extends SvelteComponent<ApplicationWindow2BulbIdeaProps> {}
