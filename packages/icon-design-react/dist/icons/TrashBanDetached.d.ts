import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashBanDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashBanDetached: ForwardRefExoticComponent<TrashBanDetachedProps & RefAttributes<SVGSVGElement>>;

export default TrashBanDetached;
export { TrashBanDetached };
