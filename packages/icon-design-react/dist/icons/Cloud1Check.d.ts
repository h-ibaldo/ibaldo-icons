import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Check: ForwardRefExoticComponent<Cloud1CheckProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Check;
export { Cloud1Check };
