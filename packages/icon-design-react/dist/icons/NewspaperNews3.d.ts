import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews3: ForwardRefExoticComponent<NewspaperNews3Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews3;
export { NewspaperNews3 };
