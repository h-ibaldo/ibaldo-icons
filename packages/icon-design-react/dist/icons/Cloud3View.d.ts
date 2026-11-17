import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3ViewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3View: ForwardRefExoticComponent<Cloud3ViewProps & RefAttributes<SVGSVGElement>>;

export default Cloud3View;
export { Cloud3View };
