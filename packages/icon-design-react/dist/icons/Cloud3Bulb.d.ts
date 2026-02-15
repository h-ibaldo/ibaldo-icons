import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3BulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Bulb: ForwardRefExoticComponent<Cloud3BulbProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Bulb;
export { Cloud3Bulb };
