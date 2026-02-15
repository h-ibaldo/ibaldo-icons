import { SvelteComponent } from 'svelte';

export interface Folder5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Folder5 extends SvelteComponent<Folder5Props> {}
