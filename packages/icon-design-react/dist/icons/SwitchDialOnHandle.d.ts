import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchDialOnHandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchDialOnHandle: ForwardRefExoticComponent<SwitchDialOnHandleProps & RefAttributes<SVGSVGElement>>;

export default SwitchDialOnHandle;
export { SwitchDialOnHandle };
