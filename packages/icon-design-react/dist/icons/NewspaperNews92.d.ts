import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews92Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews92: ForwardRefExoticComponent<NewspaperNews92Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews92;
export { NewspaperNews92 };
