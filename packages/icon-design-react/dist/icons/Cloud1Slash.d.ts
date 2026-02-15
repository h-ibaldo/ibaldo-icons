import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Slash: ForwardRefExoticComponent<Cloud1SlashProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Slash;
export { Cloud1Slash };
