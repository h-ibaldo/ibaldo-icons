import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperPlaneUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperPlaneUpRight: ForwardRefExoticComponent<PaperPlaneUpRightProps & RefAttributes<SVGSVGElement>>;

export default PaperPlaneUpRight;
export { PaperPlaneUpRight };
