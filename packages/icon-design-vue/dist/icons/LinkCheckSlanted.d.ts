import type { DefineComponent } from 'vue';

export interface LinkCheckSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckSlanted: DefineComponent<LinkCheckSlantedProps>;

export default LinkCheckSlanted;
export { LinkCheckSlanted };
