import type { DefineComponent } from 'vue';

export interface LinkCheckNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckNotched: DefineComponent<LinkCheckNotchedProps>;

export default LinkCheckNotched;
export { LinkCheckNotched };
