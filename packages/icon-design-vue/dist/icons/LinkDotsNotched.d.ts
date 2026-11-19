import type { DefineComponent } from 'vue';

export interface LinkDotsNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsNotched: DefineComponent<LinkDotsNotchedProps>;

export default LinkDotsNotched;
export { LinkDotsNotched };
