import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EarRingLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EarRingLeft: ForwardRefExoticComponent<EarRingLeftProps & RefAttributes<SVGSVGElement>>;

export default EarRingLeft;
export { EarRingLeft };
