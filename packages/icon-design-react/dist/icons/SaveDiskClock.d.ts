import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveDiskClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveDiskClock: ForwardRefExoticComponent<SaveDiskClockProps & RefAttributes<SVGSVGElement>>;

export default SaveDiskClock;
export { SaveDiskClock };
