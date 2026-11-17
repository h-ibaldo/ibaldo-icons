import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistRadioEndsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistRadioEnds: ForwardRefExoticComponent<ChecklistRadioEndsProps & RefAttributes<SVGSVGElement>>;

export default ChecklistRadioEnds;
export { ChecklistRadioEnds };
