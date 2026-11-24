import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PresentationFile: ForwardRefExoticComponent<PresentationFileProps & RefAttributes<SVGSVGElement>>;

export default PresentationFile;
export { PresentationFile };
