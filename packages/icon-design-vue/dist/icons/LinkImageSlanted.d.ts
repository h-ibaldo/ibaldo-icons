import type { DefineComponent } from 'vue';

export interface LinkImageSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkImageSlanted: DefineComponent<LinkImageSlantedProps>;

export default LinkImageSlanted;
export { LinkImageSlanted };
