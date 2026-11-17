import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFrontSlot: ForwardRefExoticComponent<BoxFrontSlotProps & RefAttributes<SVGSVGElement>>;

export default BoxFrontSlot;
export { BoxFrontSlot };
