import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareConnect2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareConnect2: ForwardRefExoticComponent<ShareConnect2Props & RefAttributes<SVGSVGElement>>;

export default ShareConnect2;
export { ShareConnect2 };
