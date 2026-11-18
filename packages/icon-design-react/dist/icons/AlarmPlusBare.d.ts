import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmPlusBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmPlusBare: ForwardRefExoticComponent<AlarmPlusBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmPlusBare;
export { AlarmPlusBare };
