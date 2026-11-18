import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncSquareHookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncSquareHook: ForwardRefExoticComponent<ArrowSyncSquareHookProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncSquareHook;
export { ArrowSyncSquareHook };
