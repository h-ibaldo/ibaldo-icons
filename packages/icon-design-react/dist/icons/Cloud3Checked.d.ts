import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3CheckedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Checked: ForwardRefExoticComponent<Cloud3CheckedProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Checked;
export { Cloud3Checked };
