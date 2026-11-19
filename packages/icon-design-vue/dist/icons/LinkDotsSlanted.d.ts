import type { DefineComponent } from 'vue';

export interface LinkDotsSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsSlanted: DefineComponent<LinkDotsSlantedProps>;

export default LinkDotsSlanted;
export { LinkDotsSlanted };
