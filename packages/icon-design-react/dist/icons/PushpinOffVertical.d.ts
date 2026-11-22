import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PushpinOffVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PushpinOffVertical: ForwardRefExoticComponent<PushpinOffVerticalProps & RefAttributes<SVGSVGElement>>;

export default PushpinOffVertical;
export { PushpinOffVertical };
