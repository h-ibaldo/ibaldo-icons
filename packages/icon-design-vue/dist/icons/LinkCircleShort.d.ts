import type { DefineComponent } from 'vue';

export interface LinkCircleShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCircleShort: DefineComponent<LinkCircleShortProps>;

export default LinkCircleShort;
export { LinkCircleShort };
