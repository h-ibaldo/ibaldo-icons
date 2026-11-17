import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistRadioAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistRadioAll: ForwardRefExoticComponent<ChecklistRadioAllProps & RefAttributes<SVGSVGElement>>;

export default ChecklistRadioAll;
export { ChecklistRadioAll };
