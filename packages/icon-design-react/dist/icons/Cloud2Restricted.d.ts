import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2RestrictedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Restricted: ForwardRefExoticComponent<Cloud2RestrictedProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Restricted;
export { Cloud2Restricted };
