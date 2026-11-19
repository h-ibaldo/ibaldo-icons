import type { DefineComponent } from 'vue';

export interface LinkEditBandNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditBandNotched: DefineComponent<LinkEditBandNotchedProps>;

export default LinkEditBandNotched;
export { LinkEditBandNotched };
