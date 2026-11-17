import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionCircleWide: ForwardRefExoticComponent<ClosedCaptionCircleWideProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionCircleWide;
export { ClosedCaptionCircleWide };
