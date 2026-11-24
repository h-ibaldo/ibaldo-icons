import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmMinusBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmMinusBare: ForwardRefExoticComponent<AlarmMinusBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmMinusBare;
export { AlarmMinusBare };
