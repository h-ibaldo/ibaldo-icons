import type { DefineComponent } from 'vue';

export interface LinkCircleSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCircleSlanted: DefineComponent<LinkCircleSlantedProps>;

export default LinkCircleSlanted;
export { LinkCircleSlanted };
