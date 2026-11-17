import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchRockerOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchRockerOff: ForwardRefExoticComponent<SwitchRockerOffProps & RefAttributes<SVGSVGElement>>;

export default SwitchRockerOff;
export { SwitchRockerOff };
