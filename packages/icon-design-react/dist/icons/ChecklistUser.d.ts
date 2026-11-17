import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistUser: ForwardRefExoticComponent<ChecklistUserProps & RefAttributes<SVGSVGElement>>;

export default ChecklistUser;
export { ChecklistUser };
