import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormDropdownExpandedLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormDropdownExpandedLines: ForwardRefExoticComponent<FormDropdownExpandedLinesProps & RefAttributes<SVGSVGElement>>;

export default FormDropdownExpandedLines;
export { FormDropdownExpandedLines };
