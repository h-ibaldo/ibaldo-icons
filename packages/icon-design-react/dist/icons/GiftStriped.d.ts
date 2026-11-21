import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GiftStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GiftStriped: ForwardRefExoticComponent<GiftStripedProps & RefAttributes<SVGSVGElement>>;

export default GiftStriped;
export { GiftStriped };
