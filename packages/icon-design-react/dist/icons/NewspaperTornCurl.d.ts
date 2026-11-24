import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperTornCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperTornCurl: ForwardRefExoticComponent<NewspaperTornCurlProps & RefAttributes<SVGSVGElement>>;

export default NewspaperTornCurl;
export { NewspaperTornCurl };
