import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1BulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Bulb: ForwardRefExoticComponent<Cloud1BulbProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Bulb;
export { Cloud1Bulb };
