import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateSyncCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateSyncCode: ForwardRefExoticComponent<TranslateSyncCodeProps & RefAttributes<SVGSVGElement>>;

export default TranslateSyncCode;
export { TranslateSyncCode };
