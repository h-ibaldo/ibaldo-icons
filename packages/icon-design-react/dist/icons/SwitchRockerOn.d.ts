import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchRockerOnProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchRockerOn: ForwardRefExoticComponent<SwitchRockerOnProps & RefAttributes<SVGSVGElement>>;

export default SwitchRockerOn;
export { SwitchRockerOn };
