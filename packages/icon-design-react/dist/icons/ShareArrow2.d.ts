import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareArrow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareArrow2: ForwardRefExoticComponent<ShareArrow2Props & RefAttributes<SVGSVGElement>>;

export default ShareArrow2;
export { ShareArrow2 };
