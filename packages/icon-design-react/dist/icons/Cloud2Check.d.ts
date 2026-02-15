import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Check: ForwardRefExoticComponent<Cloud2CheckProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Check;
export { Cloud2Check };
