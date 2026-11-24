import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperHeadlineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperHeadline: ForwardRefExoticComponent<NewspaperHeadlineProps & RefAttributes<SVGSVGElement>>;

export default NewspaperHeadline;
export { NewspaperHeadline };
