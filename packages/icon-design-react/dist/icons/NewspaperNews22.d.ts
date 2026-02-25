import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews22: ForwardRefExoticComponent<NewspaperNews22Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews22;
export { NewspaperNews22 };
