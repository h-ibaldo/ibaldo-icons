import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilPlusThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilPlusThree: ForwardRefExoticComponent<PencilPlusThreeProps & RefAttributes<SVGSVGElement>>;

export default PencilPlusThree;
export { PencilPlusThree };
