import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DocumentListCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DocumentListCurl: ForwardRefExoticComponent<DocumentListCurlProps & RefAttributes<SVGSVGElement>>;

export default DocumentListCurl;
export { DocumentListCurl };
