import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchButtonOnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchButtonOn: ForwardRefExoticComponent<SwitchButtonOnProps & RefAttributes<SVGSVGElement>>;

export default SwitchButtonOn;
export { SwitchButtonOn };
