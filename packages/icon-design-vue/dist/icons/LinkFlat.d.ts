import type { DefineComponent } from 'vue';

export interface LinkFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkFlat: DefineComponent<LinkFlatProps>;

export default LinkFlat;
export { LinkFlat };
