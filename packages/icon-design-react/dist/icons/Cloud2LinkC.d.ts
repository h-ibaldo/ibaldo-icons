import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2LinkCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2LinkC: ForwardRefExoticComponent<Cloud2LinkCProps & RefAttributes<SVGSVGElement>>;

export default Cloud2LinkC;
export { Cloud2LinkC };
