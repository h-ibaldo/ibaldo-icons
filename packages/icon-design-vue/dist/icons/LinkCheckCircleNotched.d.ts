import type { DefineComponent } from 'vue';

export interface LinkCheckCircleNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleNotched: DefineComponent<LinkCheckCircleNotchedProps>;

export default LinkCheckCircleNotched;
export { LinkCheckCircleNotched };
