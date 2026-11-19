import type { DefineComponent } from 'vue';

export interface LinkSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSlanted: DefineComponent<LinkSlantedProps>;

export default LinkSlanted;
export { LinkSlanted };
