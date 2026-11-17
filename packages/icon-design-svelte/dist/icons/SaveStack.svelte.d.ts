import { SvelteComponent } from 'svelte';

export interface SaveStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveStack extends SvelteComponent<SaveStackProps> {}
