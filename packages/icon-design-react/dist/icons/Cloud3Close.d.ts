import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Close: ForwardRefExoticComponent<Cloud3CloseProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Close;
export { Cloud3Close };
