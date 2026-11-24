import type { DefineComponent } from 'vue';

export interface LinkRaysVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkRaysVertical: DefineComponent<LinkRaysVerticalProps>;

export default LinkRaysVertical;
export { LinkRaysVertical };
