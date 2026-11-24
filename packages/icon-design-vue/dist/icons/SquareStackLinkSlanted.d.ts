import type { DefineComponent } from 'vue';

export interface SquareStackLinkSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackLinkSlanted: DefineComponent<SquareStackLinkSlantedProps>;

export default SquareStackLinkSlanted;
export { SquareStackLinkSlanted };
