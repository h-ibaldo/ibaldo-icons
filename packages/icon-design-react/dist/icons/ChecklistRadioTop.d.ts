import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistRadioTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistRadioTop: ForwardRefExoticComponent<ChecklistRadioTopProps & RefAttributes<SVGSVGElement>>;

export default ChecklistRadioTop;
export { ChecklistRadioTop };
