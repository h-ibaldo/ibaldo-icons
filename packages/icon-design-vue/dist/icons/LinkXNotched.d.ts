import type { DefineComponent } from 'vue';

export interface LinkXNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXNotched: DefineComponent<LinkXNotchedProps>;

export default LinkXNotched;
export { LinkXNotched };
