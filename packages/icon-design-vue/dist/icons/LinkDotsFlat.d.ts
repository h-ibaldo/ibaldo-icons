import type { DefineComponent } from 'vue';

export interface LinkDotsFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsFlat: DefineComponent<LinkDotsFlatProps>;

export default LinkDotsFlat;
export { LinkDotsFlat };
