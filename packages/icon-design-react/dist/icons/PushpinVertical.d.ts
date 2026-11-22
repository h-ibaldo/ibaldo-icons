import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PushpinVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PushpinVertical: ForwardRefExoticComponent<PushpinVerticalProps & RefAttributes<SVGSVGElement>>;

export default PushpinVertical;
export { PushpinVertical };
