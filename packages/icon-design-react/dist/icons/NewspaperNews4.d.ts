import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews4: ForwardRefExoticComponent<NewspaperNews4Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews4;
export { NewspaperNews4 };
