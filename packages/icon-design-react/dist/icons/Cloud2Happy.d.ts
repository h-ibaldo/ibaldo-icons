import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2HappyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Happy: ForwardRefExoticComponent<Cloud2HappyProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Happy;
export { Cloud2Happy };
