import type { DefineComponent } from 'vue';

export interface LinkXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkX: DefineComponent<LinkXProps>;

export default LinkX;
export { LinkX };
