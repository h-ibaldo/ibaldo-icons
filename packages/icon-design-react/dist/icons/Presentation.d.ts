import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Presentation: ForwardRefExoticComponent<PresentationProps & RefAttributes<SVGSVGElement>>;

export default Presentation;
export { Presentation };
