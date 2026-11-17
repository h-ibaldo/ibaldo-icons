import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrHeadsetSensorsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrHeadsetSensors: ForwardRefExoticComponent<VrHeadsetSensorsProps & RefAttributes<SVGSVGElement>>;

export default VrHeadsetSensors;
export { VrHeadsetSensors };
