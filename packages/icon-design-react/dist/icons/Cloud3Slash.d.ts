import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Slash: ForwardRefExoticComponent<Cloud3SlashProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Slash;
export { Cloud3Slash };
