import type { DefineComponent } from 'vue';

export interface LinkMenuSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuSlanted: DefineComponent<LinkMenuSlantedProps>;

export default LinkMenuSlanted;
export { LinkMenuSlanted };
