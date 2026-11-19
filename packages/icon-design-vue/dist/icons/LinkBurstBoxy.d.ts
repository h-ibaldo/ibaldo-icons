import type { DefineComponent } from 'vue';

export interface LinkBurstBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBurstBoxy: DefineComponent<LinkBurstBoxyProps>;

export default LinkBurstBoxy;
export { LinkBurstBoxy };
