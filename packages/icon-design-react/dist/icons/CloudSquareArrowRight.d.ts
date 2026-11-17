import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquareArrowRight: ForwardRefExoticComponent<CloudSquareArrowRightProps & RefAttributes<SVGSVGElement>>;

export default CloudSquareArrowRight;
export { CloudSquareArrowRight };
