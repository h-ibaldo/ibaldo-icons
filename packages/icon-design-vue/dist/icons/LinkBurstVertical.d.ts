import type { DefineComponent } from 'vue';

export interface LinkBurstVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBurstVertical: DefineComponent<LinkBurstVerticalProps>;

export default LinkBurstVertical;
export { LinkBurstVertical };
