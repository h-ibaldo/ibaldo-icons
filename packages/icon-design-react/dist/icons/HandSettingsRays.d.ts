import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSettingsRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSettingsRays: ForwardRefExoticComponent<HandSettingsRaysProps & RefAttributes<SVGSVGElement>>;

export default HandSettingsRays;
export { HandSettingsRays };
