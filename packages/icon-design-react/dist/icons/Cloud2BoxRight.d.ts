import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BoxRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2BoxRight: ForwardRefExoticComponent<Cloud2BoxRightProps & RefAttributes<SVGSVGElement>>;

export default Cloud2BoxRight;
export { Cloud2BoxRight };
