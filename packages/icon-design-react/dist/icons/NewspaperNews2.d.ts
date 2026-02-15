import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews2: ForwardRefExoticComponent<NewspaperNews2Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews2;
export { NewspaperNews2 };
