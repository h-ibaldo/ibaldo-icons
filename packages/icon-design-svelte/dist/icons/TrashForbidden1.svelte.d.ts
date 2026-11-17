import { SvelteComponent } from 'svelte';

export interface TrashForbidden1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashForbidden1 extends SvelteComponent<TrashForbidden1Props> {}
