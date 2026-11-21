import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GiftBowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GiftBow: ForwardRefExoticComponent<GiftBowProps & RefAttributes<SVGSVGElement>>;

export default GiftBow;
export { GiftBow };
