import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmAlert: ForwardRefExoticComponent<AlarmAlertProps & RefAttributes<SVGSVGElement>>;

export default AlarmAlert;
export { AlarmAlert };
