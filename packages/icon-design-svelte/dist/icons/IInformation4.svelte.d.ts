import { SvelteComponent } from 'svelte';

export interface IInformation4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformation4 extends SvelteComponent<IInformation4Props> {}
