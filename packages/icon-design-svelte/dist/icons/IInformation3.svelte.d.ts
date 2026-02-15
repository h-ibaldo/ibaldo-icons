import { SvelteComponent } from 'svelte';

export interface IInformation3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformation3 extends SvelteComponent<IInformation3Props> {}
