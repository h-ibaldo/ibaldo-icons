import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveClock: ForwardRefExoticComponent<SaveClockProps & RefAttributes<SVGSVGElement>>;

export default SaveClock;
export { SaveClock };
