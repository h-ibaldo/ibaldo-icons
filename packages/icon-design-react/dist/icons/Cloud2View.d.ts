import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2ViewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2View: ForwardRefExoticComponent<Cloud2ViewProps & RefAttributes<SVGSVGElement>>;

export default Cloud2View;
export { Cloud2View };
