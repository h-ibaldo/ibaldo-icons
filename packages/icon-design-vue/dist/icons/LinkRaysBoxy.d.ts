import type { DefineComponent } from 'vue';

export interface LinkRaysBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkRaysBoxy: DefineComponent<LinkRaysBoxyProps>;

export default LinkRaysBoxy;
export { LinkRaysBoxy };
