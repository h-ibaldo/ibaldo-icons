import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashBanNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashBanNotch: ForwardRefExoticComponent<TrashBanNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashBanNotch;
export { TrashBanNotch };
