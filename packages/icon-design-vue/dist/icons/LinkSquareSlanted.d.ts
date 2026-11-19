import type { DefineComponent } from 'vue';

export interface LinkSquareSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSquareSlanted: DefineComponent<LinkSquareSlantedProps>;

export default LinkSquareSlanted;
export { LinkSquareSlanted };
