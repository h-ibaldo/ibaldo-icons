import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperPlaneUpRightBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperPlaneUpRightBare: ForwardRefExoticComponent<PaperPlaneUpRightBareProps & RefAttributes<SVGSVGElement>>;

export default PaperPlaneUpRightBare;
export { PaperPlaneUpRightBare };
