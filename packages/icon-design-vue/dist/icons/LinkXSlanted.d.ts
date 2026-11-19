import type { DefineComponent } from 'vue';

export interface LinkXSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXSlanted: DefineComponent<LinkXSlantedProps>;

export default LinkXSlanted;
export { LinkXSlanted };
