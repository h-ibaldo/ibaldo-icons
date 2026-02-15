import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2ForbiddenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Forbidden: ForwardRefExoticComponent<Cloud2ForbiddenProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Forbidden;
export { Cloud2Forbidden };
