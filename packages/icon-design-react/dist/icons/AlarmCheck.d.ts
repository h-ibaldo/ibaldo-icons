import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmCheck: ForwardRefExoticComponent<AlarmCheckProps & RefAttributes<SVGSVGElement>>;

export default AlarmCheck;
export { AlarmCheck };
