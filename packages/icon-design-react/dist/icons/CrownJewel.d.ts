import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownJewelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownJewel: ForwardRefExoticComponent<CrownJewelProps & RefAttributes<SVGSVGElement>>;

export default CrownJewel;
export { CrownJewel };
