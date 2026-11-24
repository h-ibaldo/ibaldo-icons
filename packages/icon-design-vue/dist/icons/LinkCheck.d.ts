import type { DefineComponent } from 'vue';

export interface LinkCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheck: DefineComponent<LinkCheckProps>;

export default LinkCheck;
export { LinkCheck };
