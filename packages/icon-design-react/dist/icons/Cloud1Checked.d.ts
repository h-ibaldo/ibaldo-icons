import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1CheckedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Checked: ForwardRefExoticComponent<Cloud1CheckedProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Checked;
export { Cloud1Checked };
