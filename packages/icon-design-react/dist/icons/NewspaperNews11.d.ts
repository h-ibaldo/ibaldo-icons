import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews11: ForwardRefExoticComponent<NewspaperNews11Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews11;
export { NewspaperNews11 };
