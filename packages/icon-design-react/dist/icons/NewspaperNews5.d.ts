import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews5: ForwardRefExoticComponent<NewspaperNews5Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews5;
export { NewspaperNews5 };
