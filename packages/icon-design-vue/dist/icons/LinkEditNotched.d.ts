import type { DefineComponent } from 'vue';

export interface LinkEditNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditNotched: DefineComponent<LinkEditNotchedProps>;

export default LinkEditNotched;
export { LinkEditNotched };
