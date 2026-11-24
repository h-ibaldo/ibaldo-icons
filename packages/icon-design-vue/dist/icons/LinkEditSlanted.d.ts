import type { DefineComponent } from 'vue';

export interface LinkEditSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditSlanted: DefineComponent<LinkEditSlantedProps>;

export default LinkEditSlanted;
export { LinkEditSlanted };
