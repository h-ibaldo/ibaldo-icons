import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2PdfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2Pdf: ForwardRefExoticComponent<ApplicationWindow2PdfProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2Pdf;
export { ApplicationWindow2Pdf };
