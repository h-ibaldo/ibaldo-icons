import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBan: ForwardRefExoticComponent<AlarmBanProps & RefAttributes<SVGSVGElement>>;

export default AlarmBan;
export { AlarmBan };
