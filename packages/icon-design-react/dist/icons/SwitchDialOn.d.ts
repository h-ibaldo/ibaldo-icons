import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialOnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialOn: ForwardRefExoticComponent<SwitchDialOnProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialOn;
export { SwitchDialOn };
