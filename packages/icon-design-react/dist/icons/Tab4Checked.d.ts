import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4CheckedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4Checked: ForwardRefExoticComponent<Tab4CheckedProps & RefAttributes<SVGSVGElement>>;

export default Tab4Checked;
export { Tab4Checked };
