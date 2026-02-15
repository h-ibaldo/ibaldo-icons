import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1PositiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Positive: ForwardRefExoticComponent<Cloud1PositiveProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Positive;
export { Cloud1Positive };
