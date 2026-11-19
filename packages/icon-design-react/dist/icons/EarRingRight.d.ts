import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EarRingRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EarRingRight: ForwardRefExoticComponent<EarRingRightProps & RefAttributes<SVGSVGElement>>;

export default EarRingRight;
export { EarRingRight };
