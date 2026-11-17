import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DotsDiamondProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DotsDiamond: ForwardRefExoticComponent<DotsDiamondProps & RefAttributes<SVGSVGElement>>;

export default DotsDiamond;
export { DotsDiamond };
