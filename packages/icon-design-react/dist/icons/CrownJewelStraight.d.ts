import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownJewelStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownJewelStraight: ForwardRefExoticComponent<CrownJewelStraightProps & RefAttributes<SVGSVGElement>>;

export default CrownJewelStraight;
export { CrownJewelStraight };
