import type { DefineComponent } from 'vue';

export interface LinkPlusFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusFlat: DefineComponent<LinkPlusFlatProps>;

export default LinkPlusFlat;
export { LinkPlusFlat };
