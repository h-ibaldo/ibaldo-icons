import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RatioOneToOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RatioOneToOne: ForwardRefExoticComponent<RatioOneToOneProps & RefAttributes<SVGSVGElement>>;

export default RatioOneToOne;
export { RatioOneToOne };
