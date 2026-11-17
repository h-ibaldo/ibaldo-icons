import { SvelteComponent } from 'svelte';

export interface SaveSearch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearch2 extends SvelteComponent<SaveSearch2Props> {}
