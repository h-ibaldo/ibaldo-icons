import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BroomPlusThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BroomPlusThree: ForwardRefExoticComponent<BroomPlusThreeProps & RefAttributes<SVGSVGElement>>;

export default BroomPlusThree;
export { BroomPlusThree };
