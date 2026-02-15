import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1BoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Box: ForwardRefExoticComponent<Cloud1BoxProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Box;
export { Cloud1Box };
