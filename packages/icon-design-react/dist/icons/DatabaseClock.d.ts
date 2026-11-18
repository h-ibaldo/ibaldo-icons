import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseClock: ForwardRefExoticComponent<DatabaseClockProps & RefAttributes<SVGSVGElement>>;

export default DatabaseClock;
export { DatabaseClock };
