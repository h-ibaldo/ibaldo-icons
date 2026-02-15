import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews9: ForwardRefExoticComponent<NewspaperNews9Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews9;
export { NewspaperNews9 };
