import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxLidSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxLidSlot: ForwardRefExoticComponent<BoxLidSlotProps & RefAttributes<SVGSVGElement>>;

export default BoxLidSlot;
export { BoxLidSlot };
