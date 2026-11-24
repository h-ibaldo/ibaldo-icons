import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionOctagonWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionOctagonWide: ForwardRefExoticComponent<ClosedCaptionOctagonWideProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionOctagonWide;
export { ClosedCaptionOctagonWide };
