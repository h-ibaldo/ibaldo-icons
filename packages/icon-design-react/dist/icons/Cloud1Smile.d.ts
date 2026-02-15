import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1SmileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Smile: ForwardRefExoticComponent<Cloud1SmileProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Smile;
export { Cloud1Smile };
