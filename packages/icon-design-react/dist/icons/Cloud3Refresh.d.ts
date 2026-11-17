import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3RefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Refresh: ForwardRefExoticComponent<Cloud3RefreshProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Refresh;
export { Cloud3Refresh };
