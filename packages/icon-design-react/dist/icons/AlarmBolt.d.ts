import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBolt: ForwardRefExoticComponent<AlarmBoltProps & RefAttributes<SVGSVGElement>>;

export default AlarmBolt;
export { AlarmBolt };
