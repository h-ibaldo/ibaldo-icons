import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DotsVerticalSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DotsVerticalSmall: ForwardRefExoticComponent<DotsVerticalSmallProps & RefAttributes<SVGSVGElement>>;

export default DotsVerticalSmall;
export { DotsVerticalSmall };
