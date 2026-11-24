import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GiftRibbonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GiftRibbon: ForwardRefExoticComponent<GiftRibbonProps & RefAttributes<SVGSVGElement>>;

export default GiftRibbon;
export { GiftRibbon };
