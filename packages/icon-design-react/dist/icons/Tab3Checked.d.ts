import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3CheckedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Checked: ForwardRefExoticComponent<Tab3CheckedProps & RefAttributes<SVGSVGElement>>;

export default Tab3Checked;
export { Tab3Checked };
