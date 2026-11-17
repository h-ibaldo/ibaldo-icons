import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateSync: ForwardRefExoticComponent<TranslateSyncProps & RefAttributes<SVGSVGElement>>;

export default TranslateSync;
export { TranslateSync };
