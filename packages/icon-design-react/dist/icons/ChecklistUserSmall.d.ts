import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistUserSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistUserSmall: ForwardRefExoticComponent<ChecklistUserSmallProps & RefAttributes<SVGSVGElement>>;

export default ChecklistUserSmall;
export { ChecklistUserSmall };
