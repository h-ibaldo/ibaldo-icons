import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashBan: ForwardRefExoticComponent<TrashBanProps & RefAttributes<SVGSVGElement>>;

export default TrashBan;
export { TrashBan };
