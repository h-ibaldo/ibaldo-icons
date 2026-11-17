import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistRadioTopTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistRadioTopTwo: ForwardRefExoticComponent<ChecklistRadioTopTwoProps & RefAttributes<SVGSVGElement>>;

export default ChecklistRadioTopTwo;
export { ChecklistRadioTopTwo };
