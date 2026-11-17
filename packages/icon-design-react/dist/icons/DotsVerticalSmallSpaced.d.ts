import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DotsVerticalSmallSpacedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DotsVerticalSmallSpaced: ForwardRefExoticComponent<DotsVerticalSmallSpacedProps & RefAttributes<SVGSVGElement>>;

export default DotsVerticalSmallSpaced;
export { DotsVerticalSmallSpaced };
