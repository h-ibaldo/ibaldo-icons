import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WandPlusThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WandPlusThree: ForwardRefExoticComponent<WandPlusThreeProps & RefAttributes<SVGSVGElement>>;

export default WandPlusThree;
export { WandPlusThree };
