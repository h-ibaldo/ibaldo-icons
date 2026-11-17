import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownDots: ForwardRefExoticComponent<CrownDotsProps & RefAttributes<SVGSVGElement>>;

export default CrownDots;
export { CrownDots };
