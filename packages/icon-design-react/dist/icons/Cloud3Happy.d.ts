import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3HappyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Happy: ForwardRefExoticComponent<Cloud3HappyProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Happy;
export { Cloud3Happy };
