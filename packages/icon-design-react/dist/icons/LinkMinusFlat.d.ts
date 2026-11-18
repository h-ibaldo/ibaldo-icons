import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusFlat: ForwardRefExoticComponent<LinkMinusFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusFlat;
export { LinkMinusFlat };
