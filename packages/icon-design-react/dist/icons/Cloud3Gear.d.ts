import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3GearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Gear: ForwardRefExoticComponent<Cloud3GearProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Gear;
export { Cloud3Gear };
