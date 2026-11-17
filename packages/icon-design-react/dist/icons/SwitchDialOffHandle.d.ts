import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialOffHandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialOffHandle: ForwardRefExoticComponent<SwitchDialOffHandleProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialOffHandle;
export { SwitchDialOffHandle };
