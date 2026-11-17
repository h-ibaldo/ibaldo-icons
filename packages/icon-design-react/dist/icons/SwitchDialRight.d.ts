import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialRight: ForwardRefExoticComponent<SwitchDialRightProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialRight;
export { SwitchDialRight };
