import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationKeynoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PresentationKeynote: ForwardRefExoticComponent<PresentationKeynoteProps & RefAttributes<SVGSVGElement>>;

export default PresentationKeynote;
export { PresentationKeynote };
