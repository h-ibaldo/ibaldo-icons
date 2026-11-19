import type { DefineComponent } from 'vue';

export interface LinkEditBandSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditBandSlanted: DefineComponent<LinkEditBandSlantedProps>;

export default LinkEditBandSlanted;
export { LinkEditBandSlanted };
