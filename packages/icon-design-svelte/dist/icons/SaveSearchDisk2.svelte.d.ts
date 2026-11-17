import { SvelteComponent } from 'svelte';

export interface SaveSearchDisk2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearchDisk2 extends SvelteComponent<SaveSearchDisk2Props> {}
