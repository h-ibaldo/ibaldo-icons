import type { DefineComponent } from 'vue';

export interface LinkCheckFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckFlat: DefineComponent<LinkCheckFlatProps>;

export default LinkCheckFlat;
export { LinkCheckFlat };
