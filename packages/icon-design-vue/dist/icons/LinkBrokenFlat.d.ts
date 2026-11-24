import type { DefineComponent } from 'vue';

export interface LinkBrokenFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBrokenFlat: DefineComponent<LinkBrokenFlatProps>;

export default LinkBrokenFlat;
export { LinkBrokenFlat };
