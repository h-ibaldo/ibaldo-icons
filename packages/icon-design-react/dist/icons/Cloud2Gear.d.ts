import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2GearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Gear: ForwardRefExoticComponent<Cloud2GearProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Gear;
export { Cloud2Gear };
