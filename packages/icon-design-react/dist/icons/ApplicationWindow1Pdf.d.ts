import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow1PdfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow1Pdf: ForwardRefExoticComponent<ApplicationWindow1PdfProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow1Pdf;
export { ApplicationWindow1Pdf };
