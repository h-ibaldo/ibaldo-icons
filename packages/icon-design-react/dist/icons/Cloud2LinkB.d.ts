import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2LinkBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2LinkB: ForwardRefExoticComponent<Cloud2LinkBProps & RefAttributes<SVGSVGElement>>;

export default Cloud2LinkB;
export { Cloud2LinkB };
