import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCheckDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCheckDashed: ForwardRefExoticComponent<CheckboxCheckDashedProps & RefAttributes<SVGSVGElement>>;

export default CheckboxCheckDashed;
export { CheckboxCheckDashed };
