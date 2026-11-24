import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PilcrowArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PilcrowArrowRight: ForwardRefExoticComponent<PilcrowArrowRightProps & RefAttributes<SVGSVGElement>>;

export default PilcrowArrowRight;
export { PilcrowArrowRight };
