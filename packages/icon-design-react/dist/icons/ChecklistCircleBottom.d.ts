import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistCircleBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistCircleBottom: ForwardRefExoticComponent<ChecklistCircleBottomProps & RefAttributes<SVGSVGElement>>;

export default ChecklistCircleBottom;
export { ChecklistCircleBottom };
