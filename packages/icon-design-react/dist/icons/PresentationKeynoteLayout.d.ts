import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationKeynoteLayoutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PresentationKeynoteLayout: ForwardRefExoticComponent<PresentationKeynoteLayoutProps & RefAttributes<SVGSVGElement>>;

export default PresentationKeynoteLayout;
export { PresentationKeynoteLayout };
