import type { DefineComponent } from 'vue';

export interface LinkNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkNotched: DefineComponent<LinkNotchedProps>;

export default LinkNotched;
export { LinkNotched };
