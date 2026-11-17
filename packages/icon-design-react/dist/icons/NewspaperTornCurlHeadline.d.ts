import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperTornCurlHeadlineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperTornCurlHeadline: ForwardRefExoticComponent<NewspaperTornCurlHeadlineProps & RefAttributes<SVGSVGElement>>;

export default NewspaperTornCurlHeadline;
export { NewspaperTornCurlHeadline };
