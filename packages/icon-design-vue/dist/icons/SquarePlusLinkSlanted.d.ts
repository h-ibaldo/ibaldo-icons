import type { DefineComponent } from 'vue';

export interface SquarePlusLinkSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePlusLinkSlanted: DefineComponent<SquarePlusLinkSlantedProps>;

export default SquarePlusLinkSlanted;
export { SquarePlusLinkSlanted };
