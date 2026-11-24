import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmAlertBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmAlertBare: ForwardRefExoticComponent<AlarmAlertBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmAlertBare;
export { AlarmAlertBare };
