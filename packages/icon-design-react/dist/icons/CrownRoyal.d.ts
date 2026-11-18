import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownRoyalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownRoyal: ForwardRefExoticComponent<CrownRoyalProps & RefAttributes<SVGSVGElement>>;

export default CrownRoyal;
export { CrownRoyal };
