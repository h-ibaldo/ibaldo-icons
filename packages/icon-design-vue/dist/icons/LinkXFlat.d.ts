import type { DefineComponent } from 'vue';

export interface LinkXFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXFlat: DefineComponent<LinkXFlatProps>;

export default LinkXFlat;
export { LinkXFlat };
