import type { DefineComponent } from 'vue';

export interface LinkMenuNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuNotched: DefineComponent<LinkMenuNotchedProps>;

export default LinkMenuNotched;
export { LinkMenuNotched };
