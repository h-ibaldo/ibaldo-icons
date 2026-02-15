import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Bulb: ForwardRefExoticComponent<Cloud2BulbProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Bulb;
export { Cloud2Bulb };
