import type { DefineComponent } from 'vue';

export interface LinkMinusNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusNotched: DefineComponent<LinkMinusNotchedProps>;

export default LinkMinusNotched;
export { LinkMinusNotched };
