import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerSync: ForwardRefExoticComponent<PointerSyncProps & RefAttributes<SVGSVGElement>>;

export default PointerSync;
export { PointerSync };
