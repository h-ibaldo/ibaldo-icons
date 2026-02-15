import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BoxArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2BoxArrowRight: ForwardRefExoticComponent<Cloud2BoxArrowRightProps & RefAttributes<SVGSVGElement>>;

export default Cloud2BoxArrowRight;
export { Cloud2BoxArrowRight };
