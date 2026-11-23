import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintbrushVerticalCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintbrushVerticalCurl: ForwardRefExoticComponent<PaintbrushVerticalCurlProps & RefAttributes<SVGSVGElement>>;

export default PaintbrushVerticalCurl;
export { PaintbrushVerticalCurl };
