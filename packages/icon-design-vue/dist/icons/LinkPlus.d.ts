import type { DefineComponent } from 'vue';

export interface LinkPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlus: DefineComponent<LinkPlusProps>;

export default LinkPlus;
export { LinkPlus };
