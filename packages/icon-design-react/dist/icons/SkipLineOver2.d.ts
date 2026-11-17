import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipLineOver2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipLineOver2: ForwardRefExoticComponent<SkipLineOver2Props & RefAttributes<SVGSVGElement>>;

export default SkipLineOver2;
export { SkipLineOver2 };
