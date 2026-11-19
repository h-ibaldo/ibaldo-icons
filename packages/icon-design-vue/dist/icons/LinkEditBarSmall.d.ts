import type { DefineComponent } from 'vue';

export interface LinkEditBarSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditBarSmall: DefineComponent<LinkEditBarSmallProps>;

export default LinkEditBarSmall;
export { LinkEditBarSmall };
