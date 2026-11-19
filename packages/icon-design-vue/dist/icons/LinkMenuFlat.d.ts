import type { DefineComponent } from 'vue';

export interface LinkMenuFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuFlat: DefineComponent<LinkMenuFlatProps>;

export default LinkMenuFlat;
export { LinkMenuFlat };
