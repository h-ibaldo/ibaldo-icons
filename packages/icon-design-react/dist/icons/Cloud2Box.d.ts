import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Box: ForwardRefExoticComponent<Cloud2BoxProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Box;
export { Cloud2Box };
