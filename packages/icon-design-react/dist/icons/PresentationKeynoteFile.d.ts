import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationKeynoteFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PresentationKeynoteFile: ForwardRefExoticComponent<PresentationKeynoteFileProps & RefAttributes<SVGSVGElement>>;

export default PresentationKeynoteFile;
export { PresentationKeynoteFile };
