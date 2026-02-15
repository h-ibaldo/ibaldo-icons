import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxRadioSelect2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxRadioSelect2: ForwardRefExoticComponent<CheckboxRadioSelect2Props & RefAttributes<SVGSVGElement>>;

export default CheckboxRadioSelect2;
export { CheckboxRadioSelect2 };
