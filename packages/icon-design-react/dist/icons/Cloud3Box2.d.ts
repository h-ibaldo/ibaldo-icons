import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Box2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Box2: ForwardRefExoticComponent<Cloud3Box2Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Box2;
export { Cloud3Box2 };
