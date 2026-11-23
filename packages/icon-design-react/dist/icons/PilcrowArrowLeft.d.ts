import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PilcrowArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PilcrowArrowLeft: ForwardRefExoticComponent<PilcrowArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default PilcrowArrowLeft;
export { PilcrowArrowLeft };
