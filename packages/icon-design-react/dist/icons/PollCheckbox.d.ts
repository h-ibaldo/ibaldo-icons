import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollCheckboxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollCheckbox: ForwardRefExoticComponent<PollCheckboxProps & RefAttributes<SVGSVGElement>>;

export default PollCheckbox;
export { PollCheckbox };
