import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistTop: ForwardRefExoticComponent<ChecklistTopProps & RefAttributes<SVGSVGElement>>;

export default ChecklistTop;
export { ChecklistTop };
